"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Map from "@/components/Map";
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
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-12">
          <Map updateOption1={updateOption1} />
          <div className="flex flex-col gap-10">
            <div className=" mt-0 rounded-sm border border-stroke bg-white bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
              <h1 className="mb-4 text-3xl font-bold text-black">
                Build a Community
              </h1>
              <p className="text-gray-700 text-lg lg:text-xl">
                Tap on the map to add a neighbour's house to the solar map and
                see your community's energy use change.
              </p>
            </div>
            <ChartFour option1={option1} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
