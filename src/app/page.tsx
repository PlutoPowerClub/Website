import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import HouseholdEnergyChart from "../components/householdEnergy/HouseholdEnergy";
import CommunityEnergyChart from "../components/communityEnergy/CommunityEnergy";
import WeatherForecast from "../components/dashboardPage/WeatherForecast";
import CommunityImpact from "../components/dashboardPage/CommunityImpact";
import Cash from "../components/dashboardPage/Cash";
import ComponentLayout from "../components/componentLayout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Pluto",
};

export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      {session?.user?.name ? (
        <div className="mb-5 space-y-5 rounded-xl sm:w-full sm:grid-cols-2 sm:gap-5 sm:space-y-0">
          <ComponentLayout>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Welcome {session?.user?.name}!
            </h2>
          </ComponentLayout>
        </div>
      ) : (
        <></>
      )}
      <div className="space-y-5 rounded-xl sm:grid sm:w-full sm:grid-cols-2 sm:gap-5 sm:space-y-0">
        <WeatherForecast />
        <CommunityImpact />
        <HouseholdEnergyChart />
        <CommunityEnergyChart />
        <Cash />
      </div>
    </>
  );
}
