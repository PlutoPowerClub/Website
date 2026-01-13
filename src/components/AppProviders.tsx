"use client";
import { Providers } from "@/store/provider";
import SessionProvider from "../providers/SessionProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <SessionProvider>{children}</SessionProvider>
    </Providers>
  );
}
