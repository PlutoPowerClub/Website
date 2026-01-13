"use client";
import Map from "@/components/Map";
import CommunityBuild from "@/components/CommunityBuild";
import CommunityShare from "@/components/CommunityShare";
import dynamic from "next/dynamic";

const CommunityEnergyChart = dynamic(
  () => import("@/components/communityEnergy/CommunityEnergy"),
  { ssr: false },
);

export default function InvitesClient() {
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="sm:hidden">
          <CommunityBuild />
        </div>

        <Map />

        <div className="flex flex-col gap-2">
          <div className="hidden sm:block">
            <CommunityBuild />
          </div>
          <CommunityEnergyChart />
          <CommunityShare />
        </div>
      </div>
    </>
  );
}
