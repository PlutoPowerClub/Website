"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Map from "@/components/Map";
import ChartFour from "@/components/Charts/CommunityEnergy";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-row justify-between">
          <Map />
          <ChartFour />
        </div>
      </DefaultLayout>
    </>
  );
}
