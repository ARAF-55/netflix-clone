import { createSlice } from "@reduxjs/toolkit";


const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: null,
    reducers: {
        setPackage(state, action) {
            return action.payload;
        },
        unsetPackage(state, action) {
            return null;
        }
    }
});


export const subscribeReducer = subscribeSlice.reducer;
export const { setPackage, unsetPackage } = subscribeSlice.actions;
export const selectSubscription = state => state.subscribe;