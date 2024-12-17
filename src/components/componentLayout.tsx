export default function ComponentLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`border-stroke sm:px-7.5 rounded-xl border bg-neutral-50 p-5 shadow-sm ${className || ""}`}
    >
      {children}
    </div>
  );
}
