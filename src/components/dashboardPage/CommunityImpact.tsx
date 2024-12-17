import React from "react";
import Link from "next/link";
import ComponentLayout from "../componentLayout";

const CommunityImpact = () => {
  return (
    <ComponentLayout>
      <h5 className="text-3xl font-semibold text-neutral-800">
        Improve Community Impact
      </h5>
      <p className="text-lg text-neutral-800 lg:text-xl">
        Improve your community's energy impact by adding solar neighbours or
        using less energy.
      </p>
      <div className="flex flex-col justify-start sm:flex-row sm:space-x-10">
        <Link href="/invites">
          <button className="rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700">
            Add Solar Neighbours
          </button>
        </Link>
        <Link href="/tips">
          <button className="rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700">
            Energy Saving Tips
          </button>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default CommunityImpact;
