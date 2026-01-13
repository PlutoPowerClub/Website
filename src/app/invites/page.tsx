import { Metadata } from "next";
import InvitesClient from "@/components/InvitesClient";

export const metadata: Metadata = {
  title: "Build Your Community",
  description: "Map of possible solar energy",
};

export default async function Home() {
  return <InvitesClient />;
}
