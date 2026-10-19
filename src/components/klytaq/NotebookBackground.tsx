export function NotebookBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[#0D121C]">
      {/* Clean subtle dark horizon - zero blurry floating blobs */}
      <div
        className="absolute top-0 inset-x-0 h-96 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(34, 197, 94, 0.12), transparent 70%)",
        }}
      />
    </div>
  );
}
