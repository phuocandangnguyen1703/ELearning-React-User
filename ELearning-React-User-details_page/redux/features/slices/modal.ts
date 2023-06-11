import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ModalReduxProps {
	isOpen: boolean;
}
const initialState: ModalReduxProps = {
	isOpen: false,
};
export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setModal: (state, actions: PayloadAction<ModalReduxProps>) => {
			state.isOpen = actions.payload.isOpen;
		},
		closeModal: () => {
			return initialState;
		},
	},
});

export const { setModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
