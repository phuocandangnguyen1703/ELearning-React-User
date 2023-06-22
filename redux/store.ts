import { configureStore } from "@reduxjs/toolkit";
import modal from "@/redux/features/slices/modal";
import user from "@/redux/features/slices/user";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    modal,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      // prepend and concat calls can be chained
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
