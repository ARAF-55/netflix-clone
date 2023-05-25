import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/userSlice";
import { subscribeReducer } from "../features/subscribeSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        subscribe: subscribeReducer
    }
});

export { store };
