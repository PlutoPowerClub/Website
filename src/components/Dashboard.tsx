"use client";

import React, { useState } from "react";
import HouseholdEnergyChart from "../lib/features/householdEnergy/HouseholdEnergy";
import CommunityEnergyChart from "../lib/features/communityEnergy/CommunityEnergy";
import WeatherForecast from "./WeatherForecast";
import InviteNeighbours from "./Invite Neighbours";
import Cash from "./Cash";

const MainDashboard: React.FC = () => {
  const [communityGridEnergy, setCommunityGridEnergy] = useState(30);
  return (
    <>
      <div className="grid w-full grid-cols-10 gap-5">
        <WeatherForecast />
        <InviteNeighbours />
        <HouseholdEnergyChart />
        <CommunityEnergyChart />
        <Cash />
      </div>
    </>
  );
};

export default MainDashboard;
