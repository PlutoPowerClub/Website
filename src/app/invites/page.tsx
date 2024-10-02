"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
const ChartFour = dynamic(() => import("@/components/Charts/CommunityEnergy"), {
  ssr: false,
});
import { useState } from "react";
export default function Home() {
  const [option1, setOption1] = useState(30);
  const updateOption1 = (newValue: number) => {
    setOption1(newValue);
  };

  return (
    <>
      <DefaultLayout pageName="Community">
        <p className="py-5 text-xl text-black">
          Click to add a neighbour's building to your community solar map.
        </p>
        <div className="flex flex-row justify-between">
          <Map updateOption1={updateOption1} />
          <div className="px-4">
            <ChartFour option1={option1} />
          </div>
        </div>
        <p className="mt-10 pt-2">Solar Data: Solar API</p>
      </DefaultLayout>
    </>
  );
}
