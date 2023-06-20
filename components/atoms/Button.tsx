import clsx from "clsx";
import React, { forwardRef, memo, ReactNode } from "react";

export interface ButtonProps
	extends Omit<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"ref" | "outline"
	> {
	mode?: "default" | "primary" | "danger" | "warning";
	outline?: boolean;
	type?: "submit" | "reset" | "button";
	className?: string;
	children?: ReactNode;
}

const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			mode = "default",
			className,
			children,
			type = "button",
			outline,
			...props
		},
		ref
	) => {
		const classNames = clsx({
			"transform active:scale-95 transition-all ease-in duration-100 text-gray-800 font-normal text-xs py-2 px-6 rounded-lg hover:shadow-[0_0_4px_#36423e5c] cursor-pointer opacity-100 hover:opacity-90":
				"true",
			"bg-emerald-400 text-white": !outline && mode === "primary",
			"bg-red-400 text-white": !outline && mode === "danger",
			"bg-gray-500 text-white": !outline && mode === "default",
			"bg-yellow-400 text-white": !outline && mode === "warning",
			"border border-emerald-400 text-gray-800": outline && mode === "primary",
			"border border-red-400 text-gray-800": outline && mode === "danger",
			"border border-black text-gray-800": outline && mode === "default",
			"border border-yellow-400 text-gray-800": outline && mode === "warning",
			[className as string]: className,
		});

		return (
			<button ref={ref} type={type} {...props} className={classNames}>
				{children && children}
			</button>
		);
	}
);
Button.displayName = "button";

export default memo(Button);
