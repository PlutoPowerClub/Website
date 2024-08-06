"use client";
import Dynamic from "next/dynamic";
const MainDashboard = Dynamic(
  () => import("@/components/Dashboard/MainDashboard"),
  { ssr: false },
);
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <MainDashboard />
      </DefaultLayout>
    </>
  );
}
