import { Metadata } from "next";
import ComponentLayout from "@/components/componentLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy Tips",
  description: "Helpful energy tips to help you save energy.",
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-0">
      <ComponentLayout>
        <h1 className="text-2xl font-bold text-neutral-800 sm:text-3xl">
          Energy Saving Guide
        </h1>
        <p className="max-w-xl text-lg text-neutral-800 sm:text-xl">
          Discover smart ways to reduce your energy consumption and make a
          positive impact on the environment while benefitting your community.
        </p>
      </ComponentLayout>

      <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-neutral-50 shadow-lg sm:aspect-video sm:h-auto">
        <div></div>
        <iframe
          src="https://octopus.energy/blog/energy-saving-tips/"
          className="absolute left-0 top-0 h-full w-full rounded-xl border-0"
          title="Energy Saving Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <Link
        href="https://octopus.energy/blog/energy-saving-tips/"
        target="_blank"
      >
        <ComponentLayout className=" bg-indigo-100 hover:bg-indigo-200  sm:hidden">
          Open the Guide in New Tab
        </ComponentLayout>
      </Link>
    </div>
  );
}
