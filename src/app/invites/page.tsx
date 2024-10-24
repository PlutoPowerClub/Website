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
import { useState } from "react";
export default function Home() {
  const [communityGridEnergy, setOption1] = useState(30);
  const updateOption1 = (newValue: number) => {
    setOption1(newValue);
  };

  return (
    <>
      <DefaultLayout pageName="Community">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <Map updateOption1={updateOption1} />
          <div className="flex flex-col gap-2">
            <CommunityBuild />
            <ChartFour communityGridEnergy={communityGridEnergy} />
            <CommunityShare />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
