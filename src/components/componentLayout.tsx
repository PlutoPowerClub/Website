export default function ComponentLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`border-stroke sm:px-7.5 rounded-xl border p-5 shadow-sm sm:space-y-5 ${
        className?.includes("bg-") ? "" : "bg-neutral-50"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}
