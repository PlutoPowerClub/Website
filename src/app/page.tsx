import { redirect } from "next/navigation";
import Dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import HouseholdEnergyChart from "../components/householdEnergy/HouseholdEnergy";
import CommunityEnergyChart from "../components/communityEnergy/CommunityEnergy";
import WeatherForecast from "../components/dashboardPage/WeatherForecast";
import CommunityImpact from "../components/dashboardPage/CommunityImpact";
import Cash from "../components/dashboardPage/Cash";
import Link from "next/link";

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
    <div className="flex items-center justify-center text-neutral-800">
      <div className="border-stroke w-full rounded-2xl border bg-red-50 p-6 shadow-lg">
        {session?.user?.name ? (
          <div className="mb-5 text-3xl font-bold tracking-tight sm:mb-8 sm:text-5xl xl:text-6xl">
            Welcome {session?.user?.name}!
          </div>
        ) : (
          <></>
        )}
        <div className="border-stroke space-y-5 rounded-xl sm:grid sm:w-full sm:grid-cols-2 sm:gap-5">
          <WeatherForecast />
          <CommunityImpact />
          <HouseholdEnergyChart />
          <CommunityEnergyChart />
          <Cash />
        </div>

        <div className="mt-4 flex flex-row justify-start space-x-10 py-5 text-lg">
          <Link href="/privacy-policy" className="hover:text-neutral-600">
            Privacy Policy
          </Link>
          <Link href="/stats" className="hover:text-neutral-600">
            Stats for Nerds
          </Link>
        </div>
      </div>
    </div>
  );
}
