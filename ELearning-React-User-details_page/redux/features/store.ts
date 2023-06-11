import { configureStore } from "@reduxjs/toolkit";
import modal from "@/redux/features/slices/modal";
import user from "@/redux/features/slices/user";
const store = configureStore({
	reducer: {
		modal,
		user,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
