import React from "react";
import Link from "next/link";
import ComponentLayout from "../componentLayout";

const CommunityImpact = () => {
  return (
    <ComponentLayout>
      <h5 className="mb-7 flex items-center justify-between text-3xl font-semibold text-neutral-800">
        Improve Community Impact
      </h5>
      <p className="mb-4 text-lg text-neutral-800 lg:text-xl">
        Improve your community's energy impact by adding solar neighbours or
        using less energy.
      </p>
      <div className="flex flex-col sm:flex-row justify-start sm:space-x-10">
        <Link href="/invites">
          <button className="w-full text-bold mt-2 rounded-md bg-[#7cc45f] p-4 text-lg text-neutral-800 transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add Solar Neighbours
          </button>
        </Link>
        <Link href="/tips">
          <button className="w-full text-bold mt-2 rounded-md bg-[#7cc45f] p-4 text-lg text-neutral-800 transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Energy Saving Tips
          </button>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default CommunityImpact;
