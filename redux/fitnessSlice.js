import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customPlans: [],
    currentPlan: null,
    modalVisible: false
}

export const fitnessSlice = createSlice({
    name: 'fitness',
    initialState,
    reducers: {
        addPlan(state, action) {
            state.customPlans.push(action.payload)
        },
        setCurrentPlan(state, action) {
            state.currentPlan = action.payload
        },
        editPlan(state, action) {
            let currIdx = state.customPlans.findIndex(v => v.name === action.payload.oldName)
            state.customPlans[currIdx] = action.payload
        },
        setModalVisible(state, action) {
            state.modalVisible = action.payload
        },
        deletePlan(state, action) {
            state.customPlans = state.customPlans.filter(v => v.name !== action.payload.name)
        }
    }
})

export const fitnessReducer = fitnessSlice.reducer;
export const fitnessActions = fitnessSlice.actions;