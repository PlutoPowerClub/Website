import { Metadata } from "next";
import ComponentLayout from "@/components/componentLayout";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Bike Bus",
    description: "A supervised group cycle to local schools...",
    estimatedCost: "£2,000",
    link: "https://www.bikebus.org",
    image: "/images/projects/bike-bus.jpg",
  },
  {
    title: "Community Garden",
    description: "Transform unused space into a thriving community garden...",
    estimatedCost: "£5,000",
    link: "https://www.capitalgrowth.org",
    image: "/images/projects/garden.jpg",
  },
  {
    title: "Solar Panels for Local School",
    description: "Install solar panels on the local school roof...",
    estimatedCost: "£15,000",
    link: "https://www.solarschools.org.uk",
    image: "/images/projects/school.jpg",
  },
  {
    title: "Insulation for Low-income Households",
    description: "Provide insulation improvements for households...",
    estimatedCost: "£10,000",
    link: "https://www.energysavingtrust.org.uk",
    image: "/images/projects/insulation.jpg",
  },
];

export const metadata: Metadata = {
  title: "Community Projects",
  description: "Explore potential community projects funded by solar energy.",
};

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 px-4 md:px-0">
      <ComponentLayout>
        <h1 className="text-2xl font-bold text-neutral-800 sm:text-3xl">
          Community Projects
        </h1>
        <p className="text-lg text-neutral-800 sm:text-xl">
          Explore potential projects that could be funded by your community's
          solar energy generation. Vote for projects you'd like to see happen in
          your area!
        </p>
      </ComponentLayout>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <ComponentLayout key={index}>
            <div className="grid gap-6 sm:grid-cols-[2fr,3fr]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-800">
                    {project.title}
                  </h2>
                  <p className="text-lg text-neutral-800">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-neutral-800">
                    Estimated Cost: {project.estimatedCost}
                  </p>
                  <Link href={project.link} target="_blank">
                    <button className="rounded-lg bg-neutral-800 px-2 py-1 text-lg font-bold text-neutral-50 hover:bg-neutral-700 sm:text-xl">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </ComponentLayout>
        ))}
      </div>
    </div>
  );
}
