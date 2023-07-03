import { createSlice } from "@reduxjs/toolkit";
import { schedules } from "../data/schedules/schedules";
import { getFormattedDate } from "../helpers/getDate";
import { primary } from "../style/theme";

const initialState = {
    customPlans: [],
    currentPlan: null,
    modalVisible: false,
    recentPlans: [],
    currSch: schedules[0],
    daysMarked: {},
    currHeightFt: 0,
    currHeightIn: 0,
    tarHeightFt: 0,
    tarHeightIn: '',
    currWeight: '',
    tarWeight: '',
    firstName: 'Bro',
    lastName: '',
    image: '',
    currentGoal: 'None',
    totalWorkouts: 0
    //gender: ''
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
        },
        setSchedule(state, action) {
            state.currSch = action.payload;
        },
        markDay(state, action) {
            let date = getFormattedDate();
            state.daysMarked[date] = { selected: true, marked: true, selectedColor: primary }
        },
        setCurrHeight(state, action) {
            let data = action.payload
            state.currHeightFt = data.currHeightInFt;
            state.currHeightIn = data.currHeightInInch;
        },
        setTarHeight(state, action) {
            let data = action.payload
            state.tarHeightFt = data.tarHeightInFt;
            state.tarHeightIn = data.tarHeightInInch;
        },
        setCurrWeight(state, action) {
            state.currWeight = action.payload
        },
        setTarWeight(state, action) {
            state.tarWeight = action.payload
        },
        setProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.currentGoal = action.payload.currentGoal;
          //  state.gender = action.payload.gender;
        },
        setProfImage(state, action) {
            state.image = action.payload
        },
        addTotalWorkouts(state, action) {
            state.totalWorkouts += 1
        }

    }
})

export const fitnessReducer = fitnessSlice.reducer;
export const fitnessActions = fitnessSlice.actions;