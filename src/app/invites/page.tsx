import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import Map from "@/components/Map";
const CommunityEnergyChart = dynamic(
  () => import("@/components/communityEnergy/CommunityEnergy"),
);
import CommunityBuild from "@/components/CommunityBuild";
import CommunityShare from "@/components/CommunityShare";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Build a Community",
  description: "Map of possible solar energy",
};

export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <Map />
        <div className="flex flex-col gap-2">
          <CommunityBuild />
          <CommunityEnergyChart />
          <CommunityShare />
        </div>
      </div>
    </>
  );
}
