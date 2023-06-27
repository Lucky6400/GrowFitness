import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customPlans: [],
}

export const fitnessSlice = createSlice({
    name: 'fitness',
    initialState,
    reducers: {
        addPlan(state, action) {
            state.customPlans.push(action.payload)
        }
    }
})

export const fitnessReducer = fitnessSlice.reducer;
export const fitnessActions = fitnessSlice.actions;