import { useState, useEffect, type FormEvent } from "react";
import { Mail, Send, Copy, Check, AlertCircle, Loader2 } from "lucide-react";

const CONTACT_EMAIL = "kletaq.dev@gmail.com";
const WEB3FORMS_ACCESS_KEY = "989e3cbd-1648-41f0-a0c0-b50f31f52e88";
const RATE_LIMIT_SECONDS = 600; // 10 minutes between submissions
const MAX_PER_HOUR = 2;
const STORAGE_KEY = "kletaq_contact_history";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Feedback");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Check rate limit on load and tick countdown
  useEffect(() => {
    const checkCooldown = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const timestamps: number[] = JSON.parse(raw);
          if (timestamps.length > 0) {
            const lastTs = timestamps[timestamps.length - 1] ?? 0;
            const diffSeconds = Math.floor((Date.now() - lastTs) / 1000);
            if (diffSeconds < RATE_LIMIT_SECONDS) {
              setCooldownRemaining(RATE_LIMIT_SECONDS - diffSeconds);
            } else {
              setCooldownRemaining(0);
            }
          }
        }
      } catch {
        // LocalStorage blocked or invalid
      }
    };

    checkCooldown();
    const timer = setInterval(checkCooldown, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCooldown = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m > 0) {
      return `${m}m ${s > 0 ? `${s}s` : ""}`.trim();
    }
    return `${s}s`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Bot detection via honeypot
    if (botcheck) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      setErrorMsg("Please fill out all fields before sending.");
      return;
    }

    // Rate limiting check
    const now = Date.now();
    let history: number[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) history = JSON.parse(raw);
    } catch {
      history = [];
    }

    // Filter to last 60 minutes
    const oneHourAgo = now - 60 * 60 * 1000;
    history = history.filter((ts) => ts > oneHourAgo);

    if (history.length > 0) {
      const lastTs = history[history.length - 1] ?? 0;
      const elapsedSeconds = Math.floor((now - lastTs) / 1000);
      if (elapsedSeconds < RATE_LIMIT_SECONDS) {
        const remaining = RATE_LIMIT_SECONDS - elapsedSeconds;
        setErrorMsg(
          `Please wait ${formatCooldown(remaining)} before sending another message.`,
        );
        return;
      }
    }

    if (history.length >= MAX_PER_HOUR) {
      setErrorMsg(
        `Submission limit reached for this hour. Please write directly to ${CONTACT_EMAIL}.`,
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          subject: `[Kletaq] ${subject} - from ${trimmedName}`,
          message: trimmedMsg,
          from_name: "Kletaq Website Visitor",
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        // Record successful submission for rate-limiting
        history.push(now);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        } catch {
          // Ignore storage errors
        }

        setSuccessMsg(
          "Message sent successfully! Thanks for reaching out — we'll get back to you soon.",
        );
        setName("");
        setEmail("");
        setMessage("");
        setCooldownRemaining(RATE_LIMIT_SECONDS);
      } else {
        const detail = data?.message || "Failed to deliver message.";
        throw new Error(detail);
      }
    } catch {
      setErrorMsg(
        "Could not deliver directly. Please use the direct email button above to send your message to kletaq.dev@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full max-w-4xl mx-auto">
      <div className="paper-card p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-700">
                GET IN TOUCH
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Have a feature request, new curriculum or college you want added, or feedback? Send
                a note directly to the developer.
              </p>
            </div>

            {/* Email pill with copy button */}
            <div className="p-4 rounded-2xl bg-cyan-50/70 border-2 border-cyan-100 flex flex-col gap-2.5">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#0891b2]" />
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-bold text-slate-900 select-all truncate">
                  {CONTACT_EMAIL}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-3d-white px-3 py-1.5 text-xs font-mono font-bold shrink-0 rounded-xl"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-500 font-mono">
              <p>✨ Direct message to the developer</p>
              <p>⚡ Typically replied within 24 hours</p>
              <p>🎓 College, feature &amp; syllabus requests prioritized</p>
            </div>
          </div>

          {/* Right: Message Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field for bot spam prevention */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
              tabIndex={-1}
              autoComplete="off"
            />

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-bold text-slate-700"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0891b2] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-bold text-slate-700"
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0891b2] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono font-bold text-slate-700"
              >
                Subject
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0891b2] transition-colors cursor-pointer"
              >
                <option value="General Feedback">General Feedback &amp; Ideas</option>
                <option value="Curriculum / Syllabus Request">
                  Request New Curriculum / Syllabus
                </option>
                <option value="Bug Report">Bug Report</option>
                <option value="Study Pack Contribution">Study Pack / Notes Contribution</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono font-bold text-slate-700"
              >
                Your Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Share your thoughts, suggestions, or curriculum requests here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0891b2] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={cooldownRemaining > 0 || isSubmitting}
              className={`w-full py-3 text-sm font-mono font-bold rounded-xl flex items-center justify-center gap-2 ${
                cooldownRemaining > 0 || isSubmitting
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed border-2 border-slate-300"
                  : "btn-3d-iris"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-cyan-700" />
                  <span>Sending Message...</span>
                </>
              ) : cooldownRemaining > 0 ? (
                <span>Please wait {formatCooldown(cooldownRemaining)}</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
