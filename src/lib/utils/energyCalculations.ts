export const calculateNewCommunityEnergy = (
  currentGridEnergy: number,
  currentCommunityEnergy: number,
  solarPotential: number,
): [number, number] => {
  const potentialImpact = solarPotential * 0.1; // 10% of solar potential
  const newGridEnergy = Math.max(0, currentGridEnergy - potentialImpact);
  const newCommunityEnergy = Math.min(
    100,
    currentCommunityEnergy + potentialImpact,
  );

  return [Math.round(newGridEnergy), Math.round(newCommunityEnergy)];
};
