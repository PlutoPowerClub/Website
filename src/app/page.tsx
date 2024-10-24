"use client";
import Dynamic from "next/dynamic";
const MainDashboard = Dynamic(() => import("@/components/Dashboard"), {
  ssr: false,
});
import DefaultLayout from "@/app/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout pageName="Dashboard">
        <MainDashboard />
      </DefaultLayout>
    </>
  );
}
