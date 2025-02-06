import React from "react";
import ComponentLayout from "../componentLayout";

const Cash = () => {
  const currentAmount = 10000;
  const goalAmount = 20000;
  const progress = (currentAmount / goalAmount) * 100;

  return (
    <ComponentLayout className="col-span-2">
      <div className="col-span-12">
        <h5 className="mb-4 text-3xl font-bold text-neutral-800">
          Community Cashback
        </h5>
        <p className="mb-6 text-lg text-neutral-800 lg:text-xl">
          The more energy your community makes, the more cash you get for
          community projects!
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-neutral-800">
              South East London Community Energy
            </span>
            <span className="text-lg font-medium text-neutral-800">
              £{currentAmount.toLocaleString()} / £{goalAmount.toLocaleString()}
            </span>
          </div>
          <div className="relative h-8 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="absolute h-full bg-green-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-lg font-semibold text-neutral-800">
              Power Up North London
            </span>
            <span className="text-lg font-medium text-neutral-800">
              Coming Soon
            </span>
          </div>
          <div className="relative h-8 w-full overflow-hidden rounded-full bg-neutral-200">
            <div className="absolute h-full w-0 bg-green-600" />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Cash;
