import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login(state, action) {
            return { ...action.payload };
        },
        logout(state, action) {
            return null;
        }
    }
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const selectUser = state => state.user;