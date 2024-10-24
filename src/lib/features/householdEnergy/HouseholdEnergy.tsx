import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  chart: {
    fontFamily: "Barlow, sans-serif",
    type: "donut",
  },
  colors: ["#7dc35f", "#ae493f", "#dfb641"],
  labels: ["Community", "Grid", "Individual"],
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

const ChartThree: React.FC = () => {
  const houseCommunityEnergy = 60;
  const houseGridEnergy = 20;
  const houseIndividualEnergy = 20;
  const series = [houseCommunityEnergy, houseGridEnergy, houseIndividualEnergy];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h5 className="flex items-center justify-between text-3xl font-semibold text-black dark:text-white">
            Your Household Energy
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>
      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#63c64f]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Community </span>
              <span> {houseCommunityEnergy}% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ae493f] "></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Grid </span>
              <span> {houseGridEnergy}% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#d7a21c]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Individual </span>
              <span> {houseIndividualEnergy}% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
