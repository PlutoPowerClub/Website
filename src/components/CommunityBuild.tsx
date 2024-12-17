import ComponentLayout from "@/components/componentLayout";

const CommunityBuild = () => {
  return (
    <ComponentLayout>
      <h1 className="mb-4 text-3xl font-bold text-neutral-800">
        Build a Community
      </h1>
      <p className="text-lg text-neutral-800 lg:text-xl">
        Tap on the map to add a neighbour's house to the solar map and see your
        community's energy use change.
      </p>
    </ComponentLayout>
  );
};

export default CommunityBuild;
