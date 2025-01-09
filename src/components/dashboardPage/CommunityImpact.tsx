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
      <div className="mt-4 flex flex-col justify-start gap-4 sm:flex-row sm:gap-10">
        <Link href="/invites">
          <button className="rounded-lg bg-neutral-800 px-5 py-2 text-lg text-neutral-50 hover:bg-neutral-700 sm:text-xl">
            Add Solar Neighbours
          </button>
        </Link>
        <Link href="/tips">
          <button className="rounded-lg bg-neutral-800 px-5 py-2 text-lg text-neutral-50 hover:bg-neutral-700 sm:text-xl">
            Energy Saving Tips
          </button>
        </Link>
      </div>
    </ComponentLayout>
  );
};

export default CommunityImpact;
