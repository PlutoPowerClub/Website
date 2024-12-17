import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Tips",
  description: "Helpful energy tips to help you save energy.",
};

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-neutral-800 md:text-3xl">
        Energy Saving Guide
      </h1>
      <p className="mb-8 text-lg text-neutral-800">
        Discover smart ways to reduce your energy consumption and make a
        positive impact on the environment while benefitting your community.
      </p>
      <div className="relative aspect-video w-full rounded-xl shadow-lg sm:overflow-hidden">
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
