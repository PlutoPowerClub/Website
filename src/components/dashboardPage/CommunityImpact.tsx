import React from "react";
import Link from "next/link";
import ComponentLayout from "../componentLayout";

const CommunityImpact = () => {
  return (
    <ComponentLayout>
      <h5 className="mb-7 flex items-center justify-between text-3xl font-semibold text-black dark:text-white">
        Improve Community Impact
      </h5>
      <p className="mb-4 text-lg text-black lg:text-xl">
        Improve your community's enrgy impact by adding solar neighbours or
        using less energy.
      </p>
      <div className="flex flex-row justify-start space-x-10">
        <Link href="/invites">
          <button className="text-bold mt-2 rounded-md bg-[#7cc45f] p-4 text-lg text-black transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add Solar Neighbours
          </button>
        </Link>
        <Link href="/tips">
          <button className="text-bold mt-2 rounded-md bg-[#7cc45f] p-4 text-lg text-black transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Energy Saving Tips
          </button>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default CommunityImpact;
