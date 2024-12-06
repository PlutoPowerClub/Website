export default function ComponentLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`border-stroke sm:px-7.5 rounded-xl border bg-neutral-50 px-5 py-10 shadow-xl ${className || ""}`}
    >
      {children}
    </div>
  );
}
