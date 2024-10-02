"use client";

export default function DefaultLayout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  return (
    <>
      <div className="relative w-full overflow-x-hidden px-10">
        <div className="mx-auto flex flex-row justify-between py-8 text-5xl font-bold text-black">
          <h1>Pluto</h1>
          <h1>{pageName}</h1>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
