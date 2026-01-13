"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  session?: any;
};

export default function SessionProvider({ children }: Props) {
  // No-op provider when auth is disabled — simply render children.
  return <>{children}</>;
}
