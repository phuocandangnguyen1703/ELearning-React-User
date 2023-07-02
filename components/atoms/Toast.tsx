import React from "react";
// import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
	FaInfo,
	FaCheck,
	FaExclamationTriangle,
	FaBug,
	FaExclamationCircle
} from "react-icons/fa";

interface ToastMessageProps {
	type: string;
	message: string;
}

export const displayIcon = ({ type }: { type: string }) => {
	switch (type) {
		case "success":
			return <FaCheck />;
		case "info":
			return <FaInfo />;
		case "error":
			return <FaExclamationCircle />;
		case "warning":
			return <FaExclamationTriangle />;
		default:
			return <FaBug />;
	}
};

const ToastMessage: React.FC<ToastMessageProps> = ({ type, message }) => (

	<div style={{ display: "flex" }}>
		<div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
			{message}
		</div>
	</div>
);

// ToastMessage.propTypes = {
// 	message: PropTypes.string.isRequired,
// 	type: PropTypes.string.isRequired
// };

export default ToastMessage;
