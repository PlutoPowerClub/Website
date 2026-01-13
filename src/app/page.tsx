import ComponentLayout from "../components/componentLayout";
import ClientApp from "@/components/ClientApp";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Pluto",
};

export default async function Home() {
  // Provide a demo session when auth is disabled
  const session = { user: { name: "Demo User" } };

  return (
    <>
      {session?.user?.name ? (
        <div className="mb-5 space-y-5 rounded-xl sm:w-full sm:grid-cols-2 sm:gap-5 sm:space-y-0">
          <ComponentLayout>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-4xl">
              Welcome, {session?.user?.name}!
            </h2>
          </ComponentLayout>
        </div>
      ) : (
        <></>
      )}

      {/* Client-only UI: moved to a client component to avoid server-side window access */}
      <ClientApp />
    </>
  );
}
