import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customPlans: [],
    currentPlan: null,
    modalVisible: false,
    recentPlans: []
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
        },
        addToRecent(state, action) {
            let exists = state.recentPlans.find(pl => pl.name === action.payload.name);
           // console.log(exists)
            if (!exists) {
                let currPlans = state.recentPlans;
                if (currPlans.length === 5) {
                    currPlans.pop();
                    currPlans.unshift(action.payload)
                } else {
                    currPlans.unshift(action.payload)
                }
                state.recentPlans = currPlans
            }
        }
    }
})

export const fitnessReducer = fitnessSlice.reducer;
export const fitnessActions = fitnessSlice.actions;