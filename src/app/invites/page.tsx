"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/app/DefaultLayout";
import Map from "@/components/Map";
const ChartFour = dynamic(
  () => import("@/lib/features/communityEnergy/CommunityEnergy"),
  {
    ssr: false,
  },
);
import CommunityBuild from "@/components/CommunityBuild";
import CommunityShare from "@/components/CommunityShare";
export default function Home() {
  return (
    <>
      <DefaultLayout pageName="Community">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <Map />
          <div className="flex flex-col gap-2">
            <CommunityBuild />
            <ChartFour />
            <CommunityShare />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
