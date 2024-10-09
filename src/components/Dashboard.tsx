"use client";

import React, { useState } from "react";
import ChartThree from "./Charts/HouseholdEnergy";
import ChartFour from "./Charts/CommunityEnergy";
import WeatherForecast from "./WeatherForecast";
import InviteNeighbours from "./Invite Neighbours";
import Cash from "./Cash";

const MainDashboard: React.FC = () => {
  const [communityGridEnergy, setCommunityGridEnergy] = useState(30);
  return (
    <>
      <div className="grid w-full grid-cols-10 gap-2">
        <WeatherForecast />
        <InviteNeighbours />
        <ChartThree />
        <ChartFour communityGridEnergy={communityGridEnergy} />
        <Cash />
      </div>
    </>
  );
};

export default MainDashboard;
