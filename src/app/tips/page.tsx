"use client";
import dynamic from "next/dynamic";
import DefaultLayout from "@/app/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout pageName="Energy Tips">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="flex flex-col gap-2">
            <ul>
              <li>
                Maximise your energy usage with this helpful guide on how to
                save energy. (https://octopus.energy/blog/energy-saving-tips/)
              </li>
              <li>Best times to use energy</li>
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
