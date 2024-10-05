import { api } from "@/api";
import firstSlice from "@/features/First/firstSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        first:             firstSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
