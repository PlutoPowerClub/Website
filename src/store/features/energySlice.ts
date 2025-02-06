import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import communityEnergyValues from "@/components/communityEnergy/communityEnergy.json";

interface EnergyState {
  communityGridEnergy: number;
  communityCommunityEnergy: number;
}

const initialState: EnergyState = {
  communityGridEnergy: communityEnergyValues.communityGridEnergy.initialValue,
  communityCommunityEnergy:
    communityEnergyValues.communityCommunityEnergy.initialValue,
};

export const energySlice = createSlice({
  name: "energy",
  initialState,
  reducers: {
    updateCommunityEnergy: (state, action: PayloadAction<EnergyState>) => {
      state.communityGridEnergy = Math.max(
        0,
        Math.min(
          100,
          state.communityGridEnergy + action.payload.communityGridEnergy,
        ),
      );
      state.communityCommunityEnergy = Math.max(
        0,
        Math.min(
          100,
          state.communityCommunityEnergy +
            action.payload.communityCommunityEnergy,
        ),
      );
    },
  },
});

export const { updateCommunityEnergy } = energySlice.actions;
export default energySlice.reducer;
