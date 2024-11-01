"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/app/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout pageName="Privacy Policy">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="flex flex-col gap-2">
            explanation of how your data is gathered/used
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
