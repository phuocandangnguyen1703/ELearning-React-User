"use client";
import React, { forwardRef, memo, useState } from "react";
import { FieldError } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	name: string;
	type?: "text" | "password" | "number";
	errors?: FieldError;
	required?: boolean;
	className?: string;
	mode?: "primary" | "default";
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ title, errors = {}, required = false, ...props }, ref) => {
		const [isPasswordVisible, setIsPasswordVisible] = useState(false);

		const togglePasswordVisibility = () => {
			setIsPasswordVisible((prevState) => !prevState);
		};
		return (
			<div className="relative w-full">
				<label
					htmlFor="name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{title}
				</label>
				{props.type === "password" ? (
					<div className="w-full gap-2 flex items-center justify-center border border-[#2F80ED] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
						<input
							ref={ref}
							{...props}
							type={!isPasswordVisible ? props.type : "text"}
							className="flex-1 border-none outline-none"
						/>
						{isPasswordVisible ? (
							<AiFillEyeInvisible
								size={18}
								onClick={togglePasswordVisibility}
							/>
						) : (
							<AiFillEye size={18} onClick={togglePasswordVisibility} />
						)}
					</div>
				) : (
					<input
						ref={ref}
						{...props}
						className="w-full gap-2 flex items-center justify-center border border-[#2F80ED] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
					/>
				)}
				{!!errors?.message && required && (
					<p className="text-red-400 text-[10px] absolute bottom-0 translate-y-4">
						{errors?.message}
					</p>
				)}
			</div>
		);
	}
);

TextField.displayName = "TextField";
export default memo(TextField);
