import { Metadata } from "next";
import ComponentLayout from "@/components/componentLayout";
export const metadata: Metadata = {
  title: "Energy Tips",
  description: "Helpful energy tips to help you save energy.",
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <ComponentLayout>
        <h1 className="text-2xl font-bold text-neutral-800 sm:text-3xl">
          Energy Saving Guide
        </h1>
        <p className="max-w-xl text-xl text-neutral-800">
          Discover smart ways to reduce your energy consumption and make a
          positive impact on the environment while benefitting your community.
        </p>
      </ComponentLayout>
      <div className="relative h-[400px] w-full rounded-xl shadow-lg sm:aspect-video sm:h-auto sm:overflow-hidden">
        <iframe
          src="https://octopus.energy/blog/energy-saving-tips/"
          className="absolute left-0 top-0 h-full w-full border-0"
          title="Energy Saving Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}
