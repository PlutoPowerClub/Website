"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import ComponentLayout from "../componentLayout";
import householdEnergyValues from "./householdEnergy.json";

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

const HouseholdEnergyChart: React.FC = () => {
  let householdCommunityEnergy: number =
    householdEnergyValues.householdCommunityEnergy.initialValue;
  let householdGridEnergy: number =
    householdEnergyValues.householdGridEnergy.initialValue;
  let householdIndividualEnergy: number =
    householdEnergyValues.householdIndividualEnergy.initialValue;
  const series = [
    householdCommunityEnergy,
    householdGridEnergy,
    householdIndividualEnergy,
  ];

  return (
    <ComponentLayout>
      {" "}
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h5 className="flex items-center justify-between text-3xl font-semibold text-neutral-800 ">
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
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Community </span>
              <span> {householdCommunityEnergy}% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ae493f] "></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Grid </span>
              <span> {householdGridEnergy}% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#d7a21c]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Individual </span>
              <span> {householdIndividualEnergy}% </span>
            </p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default HouseholdEnergyChart;
