"use client";

import React, { useState } from "react";
import HouseholdEnergyChart from "../../lib/features/householdEnergy/HouseholdEnergy";
import CommunityEnergyChart from "../../lib/features/communityEnergy/CommunityEnergy";
import WeatherForecast from "./WeatherForecast";
import CommunityImpact from "./CommunityImpact";
import Cash from "./Cash";
import Link from "next/link";

const MainDashboard: React.FC = () => {
  const [communityGridEnergy, setCommunityGridEnergy] = useState(30);
  return (
    <>
      <div className="grid w-full grid-cols-10 gap-5">
        <WeatherForecast />
        <CommunityImpact />
        <HouseholdEnergyChart />
        <CommunityEnergyChart />
        <Cash />
      </div>
      <div className="flex flex-row justify-start space-x-10 py-5 text-lg">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/stats">Stats for Nerds</Link>
      </div>
    </>
  );
};

export default MainDashboard;
