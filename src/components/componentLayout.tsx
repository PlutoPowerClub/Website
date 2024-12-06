export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-stroke sm:px-7.5 rounded-xl border bg-neutral-50 px-5 py-10 shadow-xl">
      {children}
    </div>
  );
}
