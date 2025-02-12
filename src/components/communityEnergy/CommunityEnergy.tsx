"use client";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import ComponentLayout from "../componentLayout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const options: ApexOptions = {
  chart: {
    fontFamily: "Barlow, sans-serif",
    type: "donut",
  },
  colors: ["#16a34a", "#b91c1c"],
  labels: ["Community Solar", "Grid Energy"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 250,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const CommunityEnergyChart = () => {
  const { communityGridEnergy, communityCommunityEnergy } = useSelector(
    (state: RootState) => state.energy,
  );

  const series = [communityCommunityEnergy, communityGridEnergy];

  return (
    <ComponentLayout>
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="flex items-center justify-between text-3xl font-semibold text-neutral-800">
            Your Community's Energy
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#b91c1c]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Grid Energy</span>
              <span> {communityGridEnergy}%</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#16a34a]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Community Solar </span>
              <span> {communityCommunityEnergy}%</span>
            </p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default CommunityEnergyChart;
