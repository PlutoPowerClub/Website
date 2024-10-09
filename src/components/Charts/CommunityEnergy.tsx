import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartFourState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Barlow, sans-serif",
    type: "donut",
  },
  colors: ["#63c64f", "#bc4039"],
  labels: ["Community", "Grid"],
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

const ChartFour: React.FC<{ option1: number }> = ({ option1 }) => {
  const series = [];
  series[0] = option1;
  series[1] = 100 - series[0];

  return (
    <div className="px- col-span-12 rounded-sm border border-stroke bg-white pb-2 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="flex items-center justify-between text-3xl font-semibold text-black dark:text-white">
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
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#bc4039]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Grid </span>
              <span> {series[1]}%</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#63c64f]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Community </span>
              <span> {series[0]}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
