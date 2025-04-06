import React from "react";
import Link from "next/link";
import ComponentLayout from "../componentLayout";

const EnergyTips = () => {
  return (
    <ComponentLayout>
      <h5 className="text-2xl font-semibold text-neutral-800">
        Improve Your Impact
      </h5>
      <p className="text-base text-neutral-800 lg:text-lg">
        Improve your household energy impact by using less energy. This will
        help reduce your carbon footprint and save money for your community.
      </p>
      <div className="mt-3 flex flex-col justify-start gap-3 sm:flex-row sm:gap-6">
        <Link href="/tips">
          <button className="rounded-lg bg-neutral-800 px-5 py-2 text-lg text-neutral-50 hover:bg-neutral-700 sm:text-xl">
            Energy Saving Tips
          </button>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default EnergyTips;
