import heroShot from "@/assets/1.hero_screenshot.png.asset.json";
import { ScreenshotSlot } from "./ScreenshotSlot";


/** Right-side phone mockup used in the hero. */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* handwritten arrow note */}
      <span className="absolute -top-8 -left-6 hidden font-hand text-lg text-muted-foreground sm:block">
        your semester ↴
      </span>

      <div className="paper-card relative rounded-[36px] p-3">
        <div className="ink-border ruled relative overflow-hidden rounded-[26px] bg-card">
          {/* status bar */}
          <div className="flex items-center justify-between border-b-[1.5px] border-border px-4 py-2 font-mono text-[10px]">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-foreground/80" />
            <span>100%</span>
          </div>

          <div className="space-y-3 p-4">
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              Semester 3 · Computer Science
            </p>
            <h3 className="font-hand text-2xl leading-none">Partial Differentiation</h3>

            <div className="ink-border rounded-xl p-3">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span>Total Derivative</span>
                <span className="text-primary">68%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full border-[1.5px] border-border">
                <div className="h-full w-[68%] bg-primary" />
              </div>
            </div>

            <div className="ink-border rounded-xl p-3">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span>Jacobians</span>
                <span className="text-muted-foreground">24%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full border-[1.5px] border-border">
                <div className="h-full w-[24%] bg-foreground" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="ink-border rounded-full px-2.5 py-1 font-mono text-[10px]">
                🔥 12 day streak
              </span>
              <span className="ink-border rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] text-primary-foreground">
                +240 XP
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ScreenshotSlot
          label="Journey map"
          src={heroShot.url}
          caption="Semester 3 · Computer Science / Partial Differentiation / Total Derivative / Jacobians"
        />
      </div>

    </div>
  );
}
