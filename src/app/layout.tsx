"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/barlow.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  pageName: string;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  const pageName = document.title;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="open source, energy, dashboard" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pluto" />
        <meta name="description" content={"Open Source Energy Dashboard"} />
        <link rel="canonical" href="https://plutowebsite.vercel.app" />
        {/* Favicon */}
        {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      {/* Theme color */}
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-TileColor" content="#000000" />
        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="Pluto" />
        <meta
          name="twitter:description"
          content="Open Source Energy Dashboard"
        />
        {/* <meta name="twitter:image" content="/images/banner-draft.png" /> */}
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="Pluto"></meta>
        <meta property="og:type" content="https://plutowebsite.vercel.app/" />
        <meta property="og:url" content="https://plutowebsite.vercel.app/" />
        <meta property="og:title" content="Pluto" />
        <meta
          property="og:description"
          content="Open Source Energy Dashboard"
        />
        {/* <meta property="og:image" content="/images/banner-draft.png" /> */}
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="relative w-full overflow-x-hidden px-10">
          <div className="flex flex-row justify-between py-10 text-6xl font-bold text-black">
            <Link href="/">
              <h1>Pluto</h1>
            </Link>
            <h1>{pageName}</h1>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
