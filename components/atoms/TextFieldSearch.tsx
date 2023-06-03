import clsx from "clsx";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { MdOutlineSearch } from "react-icons/md";
interface TextFieldSearchProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	error?: FieldError;
	className?: string;
	id?: string;
}
const TextFieldSearch = forwardRef<HTMLInputElement, TextFieldSearchProps>(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ title, name, error, className, id, ...props }, ref) => {
		const classNames = clsx(
			"bg-[#FFFFFF66] font-medium text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full h-10 flex items-center px-4 overflow-hidden",
			{
				[className as string]: className,
			}
		);
		return (
			<div className="flex flex-col w-full relative h-full">
				{title && (
					<label
						htmlFor={name}
						className="block mb-1 text-sm font-normal text-black"
					>
						{title}
					</label>
				)}
				<div className={classNames}>
					<MdOutlineSearch size={20} color="white" />
					<input
						id={id}
						{...props}
						type="text"
						className="h-full outline-none bg-transparent text-white pl-2 flex-1"
					/>
				</div>

				{!!error && (
					<p className="text-red-500 text-xs absolute bottom-[-12px]">
						{error?.message}
					</p>
				)}
			</div>
		);
	}
);

TextFieldSearch.displayName = "text_field";

export default TextFieldSearch;
