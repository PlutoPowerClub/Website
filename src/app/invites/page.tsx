"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Map from "@/components/Map";
import ChartFour from "@/components/Charts/CommunityEnergy";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p className="py-5 text-xl text-black">
          Click to add a neighbour's building to your community solar map.
        </p>
        <div className="flex flex-row justify-between">
          <Map />
          <div className="px-4">
            <ChartFour />
          </div>
        </div>
        <p className="pt-10">Solar Data: Solar API</p>
      </DefaultLayout>
    </>
  );
}
