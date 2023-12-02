import { configureStore } from "@reduxjs/toolkit";
import authSliceProvider from "./authSlice";
import postSliceProvider from "./postSlice";

const store = configureStore({
    reducer: {
        auth: authSliceProvider,
        posts: postSliceProvider
    }
});
export default store;