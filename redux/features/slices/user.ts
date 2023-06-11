import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface UserReduxProps {
	token: string;
	name?: string;
}
const initialState: UserReduxProps = {
	token: "",
	name: "",
};
export const UserSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		setUser: (state, actions: PayloadAction<UserReduxProps>) => {
			state.token = actions.payload.token;
			state.name = actions.payload.name;
		},
		resetUser: () => {
			return initialState;
		},
	},
});

export const { setUser, resetUser } = UserSlice.actions;

export default UserSlice.reducer;
