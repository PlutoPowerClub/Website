"use client";
import React from "react";
import ChartThree from "../Charts/HouseholdEnergy";
import ChartFour from "../Charts/CommunityEnergy";
import WeatherForecast from "../WeatherForecast";
import InviteNeighbours from "../Invite Neighbours";

const MainDashboard: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <WeatherForecast />
        <InviteNeighbours />
        <ChartThree />
        <ChartFour />
      </div>
    </>
  );
};

export default MainDashboard;
