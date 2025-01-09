import "@/css/style.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../providers/SessionProvider";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

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
      <body className="bg-indigo-100">
        <div className="relative min-h-screen animate-[fadeIn_0.4s_ease-in] p-5 sm:px-10">
          <SessionProvider session={session}>
            <main>
              <NavMenu />
              <div className="border-stroke w-full rounded-2xl border bg-red-50 p-6 text-neutral-800 shadow-xl">
                {children}
              </div>
              <Footer />
            </main>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
