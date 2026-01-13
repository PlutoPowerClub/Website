"use client";
import dynamic from "next/dynamic";
import NavMenu from "./NavMenu";

const EnergyTips = dynamic(() => import("./dashboardPage/EnergyTips"), {
  ssr: false,
});
const CommunityImpact = dynamic(
  () => import("./dashboardPage/CommunityImpact"),
  { ssr: false }
);
const HouseholdEnergyChart = dynamic(
  () => import("./householdEnergy/HouseholdEnergy"),
  { ssr: false }
);
const CommunityEnergyChart = dynamic(
  () => import("./communityEnergy/CommunityEnergy"),
  { ssr: false }
);
const WeatherForecast = dynamic(() => import("./dashboardPage/WeatherForecast"), {
  ssr: false,
});
const Cash = dynamic(() => import("./dashboardPage/Cash"), { ssr: false });

export default function ClientApp() {
  return (
    <div>
      <NavMenu />
      <div className="space-y-5 rounded-xl sm:grid sm:w-full sm:grid-cols-2 sm:gap-5 sm:space-y-0">
        <EnergyTips />
        <CommunityImpact />
        <HouseholdEnergyChart />
        <CommunityEnergyChart />
        <WeatherForecast />
        <Cash />
      </div>
    </div>
  );
}
