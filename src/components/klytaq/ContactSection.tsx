import { useState, useEffect, type FormEvent } from "react";
import { Mail, Send, Copy, Check, AlertCircle } from "lucide-react";

const CONTACT_EMAIL = "kletaq.dev@gmail.com";
const RATE_LIMIT_SECONDS = 60;
const MAX_PER_HOUR = 3;
const STORAGE_KEY = "kletaq_contact_history";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Feedback");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Check rate limit on load and tick countdown
  useEffect(() => {
    const timer = setInterval(() => {
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
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

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
          `⏳ Rate limit active: please wait ${remaining}s before sending another message.`,
        );
        return;
      }
    }

    if (history.length >= MAX_PER_HOUR) {
      setErrorMsg(
        `⚠️ Limit reached (${MAX_PER_HOUR} messages/hour). Please write directly to ${CONTACT_EMAIL}.`,
      );
      return;
    }

    // Record submission
    history.push(now);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {
      // Ignore storage errors
    }

    // Build mailto URI and trigger client
    const mailtoSubject = encodeURIComponent(`[Kletaq App] ${subject} - from ${trimmedName}`);
    const mailtoBody = encodeURIComponent(
      `Hi Akash,\n\n${trimmedMsg}\n\n---\nSender Name: ${trimmedName}\nSender Email: ${trimmedEmail}`,
    );
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Provide user feedback
    setSuccessMsg(
      `✓ Opening your email client to send to ${CONTACT_EMAIL}. Thank you for your feedback!`,
    );
    setName("");
    setEmail("");
    setMessage("");
    setCooldownRemaining(RATE_LIMIT_SECONDS);
  };

  return (
    <div id="contact" className="w-full max-w-4xl mx-auto">
      <div className="paper-card p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-purple-700">
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
            <div className="p-4 rounded-2xl bg-purple-50/70 border-2 border-purple-100 flex flex-col gap-2.5">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#7C3AED]" />
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
              <p>✓ Typically replied within 24 hours</p>
              <p>✓ Spam-protected &amp; rate-limited</p>
              <p>✓ College &amp; student requests prioritized</p>
            </div>
          </div>

          {/* Right: Message Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors cursor-pointer"
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
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={cooldownRemaining > 0}
              className={`w-full py-3 text-sm font-mono font-bold rounded-xl flex items-center justify-center gap-2 ${
                cooldownRemaining > 0
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed border-2 border-slate-400"
                  : "btn-3d-iris"
              }`}
            >
              <Send className="h-4 w-4" />
              {cooldownRemaining > 0 ? `Wait ${cooldownRemaining}s (Rate Limit)` : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
