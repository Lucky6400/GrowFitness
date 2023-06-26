import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customPlans: [],
}

export const fitnessSlice = createSlice({
    name: 'fitness',
    initialState,
    reducers: {

    }
})

export const fitnessReducer = fitnessSlice.reducer;
export const fitnessActions = fitnessSlice.actions;