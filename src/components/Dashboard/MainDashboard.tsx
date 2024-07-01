"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartFour from "../Charts/ChartFour";
import WeatherForecast from "../WeatherForecast";

const MainDashboard: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartThree />
        <ChartFour />
        <WeatherForecast />
      </div>
    </>
  );
};

export default MainDashboard;
