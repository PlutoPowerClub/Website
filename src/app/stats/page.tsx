"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/app/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout pageName="Stats for Nerds">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="flex flex-col gap-2">
            How we've calculated energy usage and price estimates
          </div>
          <div>suggestion form or just email</div>
        </div>
      </DefaultLayout>
    </>
  );
}
