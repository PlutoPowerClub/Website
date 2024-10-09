"use client";

import Link from "next/link";

export default function DefaultLayout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  return (
    <>
      <div className="relative w-full overflow-x-hidden px-10 py-2">
        <div className="mx-auto flex flex-row justify-between pb-6 pt-3 text-6xl font-bold text-black">
          <Link href="/">
            <h1>Pluto</h1>
          </Link>
          <h1>{pageName}</h1>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
