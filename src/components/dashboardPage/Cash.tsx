import React from "react";
import ComponentLayout from "../componentLayout";
const Cash = () => {
  return (
    <ComponentLayout className="col-span-2">
      <div className="col-span-12">
        <h5 className="mb-4 text-3xl font-bold text-neutral-800 ">
          Community Cashback
        </h5>
        <p className="text-lg text-neutral-800 lg:text-xl">
          The more energy your community makes, the more cash you get for
          community projects!
        </p>
        <ul className="flex flex-col pt-1 text-lg text-neutral-800">
          <li>£10,000 for community garden</li>
        </ul>
      </div>
    </ComponentLayout>
  );
};

export default Cash;
