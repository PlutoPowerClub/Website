import ComponentLayout from "@/components/componentLayout";

const CommunityBuild = () => {
  return (
    <ComponentLayout>
      <h1 className="mb-4 text-3xl font-semibold text-neutral-800">
        Build Your Community
      </h1>
      <p className="text-lg text-neutral-800 lg:text-xl">
        Tap on the map to add a neighbour's house to the solar map and see your
        community's potential energy generation change. This is calculated based
        on the solar potential of each building in your neighbourhood.
      </p>
    </ComponentLayout>
  );
};

export default CommunityBuild;
