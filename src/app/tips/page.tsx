import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Tips",
  description: "Helpful energy tips to help you save energy.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-xl md:p-8">
          <h1 className="mb-6 text-2xl font-bold text-neutral-800 md:text-3xl">
            Energy Saving Guide
          </h1>

          <p className="mb-8 text-lg text-neutral-600">
            Discover smart ways to reduce your energy consumption and make a
            positive impact on the environment while saving money.
          </p>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://octopus.energy/blog/energy-saving-tips/"
              className="absolute left-0 top-0 h-full w-full border-0"
              title="Energy Saving Tips"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
