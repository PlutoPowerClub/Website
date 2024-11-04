import dynamic from "next/dynamic";
import Map from "@/components/Map";
const CommunityEnergyChart = dynamic(
  () => import("@/components/communityEnergy/CommunityEnergy"),
  {
    ssr: false,
  },
);
import CommunityBuild from "@/components/CommunityBuild";
import CommunityShare from "@/components/CommunityShare";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Build a Community",
  description: "Map of possible solar energy",
};

export default function Home() {
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
