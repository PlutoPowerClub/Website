import React from "react";
import Link from "next/link";

const InviteNeighbours = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <h5 className="text-xl font-semibold text-black dark:text-white">
        Add Solar Neighbours to increase your community share!
      </h5>
      <div className=" flex justify-end">
        <Link href="/invites">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Invite Neighbours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InviteNeighbours;
