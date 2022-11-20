import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/authSlice";
import damageReducer from "../features/damageSlice"
import ClientReducer from "../features/ClientSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        damage:damageReducer,
        client:ClientReducer
    },
});
