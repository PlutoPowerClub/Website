import Dynamic from "next/dynamic";
const MainDashboard = Dynamic(
  () => import("@/components/dashboardPage/Dashboard"),
  {
    ssr: false,
  },
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Pluto",
};

export default function Home(pageName = "Dashboard") {
  return (
    <>
      <MainDashboard />
    </>
  );
}
