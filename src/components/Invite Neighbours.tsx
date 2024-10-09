import React from "react";
import Link from "next/link";

const InviteNeighbours = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <h5 className="mb-7 flex items-center justify-between text-3xl font-semibold text-black dark:text-white">
        Increase Community Impact
      </h5>

      <div className="flex flex-row justify-between">
        <p className="max-w-sm text-xl text-black">
          Add neighbours to the map to increase the share of renewables.
        </p>
        <Link href="/invites">
          <button className="text-bold mt-2 rounded-md bg-[#7cc45f] p-4 text-lg text-black transition duration-150 ease-in-out hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add Solar Neighbours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InviteNeighbours;
