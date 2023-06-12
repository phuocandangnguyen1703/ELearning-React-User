import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
export interface UserReduxProps {
	token: string;
	name?: string;
	id: string;
}
const reset: UserReduxProps = {
	token: "",
	name: "",
	id: "",
};
let initialState: UserReduxProps = reset;
if (getCookie("user")) {
	initialState = JSON.parse(getCookie("user") as string) as UserReduxProps;
}
export const UserSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		setUser: (state, actions: PayloadAction<UserReduxProps>) => {
			state.token = actions.payload.token;
			state.name = actions.payload.name;
			state.id = actions.payload.id;
		},
		resetUser: () => {
			return reset;
		},
	},
});

export const { setUser, resetUser } = UserSlice.actions;

export default UserSlice.reducer;
