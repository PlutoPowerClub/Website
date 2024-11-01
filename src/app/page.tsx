"use client";
import Dynamic from "next/dynamic";
const MainDashboard = Dynamic(
  () => import("@/components/dashboardPage/Dashboard"),
  {
    ssr: false,
  },
);

export default function Home(pageName = "Dashboard") {
  return (
    <>
      <MainDashboard />
    </>
  );
}
