import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/barlow.css";
import "@/css/style.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../providers/SessionProvider";
import NavMenu from "../components/NavMenu";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="open source, energy, dashboard" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pluto" />
        <meta name="description" content={"Open Source Energy Dashboard"} />
        <link rel="canonical" href="https://plutowebsite.vercel.app" />
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
          <SessionProvider session={session}>
            <main>
              <NavMenu />
              {children}
            </main>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
