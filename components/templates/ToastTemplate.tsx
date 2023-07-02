import React from "react";
import toast from "@/components/atoms/Toast";

interface ToastTemplateProps {
	messages: string;
	toastType: string;
}

const ToastTemplate: React.FC<ToastTemplateProps> = ({
	messages,
	toastType,
}) => {
	React.useEffect(() => {
		toast({ type: toastType, message: messages });
	}, [toastType, messages]);

	return (
		<>
			<div className="message">{messages}</div>
			<style jsx>{`
				.message {
					cursor: pointer;
					font: 15px Helvetica, Arial, sans-serif;
					background: #eee;
					padding: 20px;
					text-align: center;
					transition: 100ms ease-in background;
					margin: 10px;
				}
				.message:hover {
					background: #ccc;
				}
			`}</style>
		</>
	);
};

export default ToastTemplate;
