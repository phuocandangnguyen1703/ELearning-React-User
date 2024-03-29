"use client";
import { OptionType } from "@/types/common";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";
import { FieldError } from "react-hook-form";
import ReactSelect, {
	ControlProps,
	GroupBase,
	MenuListProps,
	MenuProps,
	MultiValueRemoveProps,
	OptionProps,
	ValueContainerProps,
	components,
} from "react-select";

export interface ISelectProps {
	value: OptionType;
	title?: string;
	className?: string;
	error?: FieldError;
	options: OptionType[];
	isMulti?: boolean;
	disabled?: boolean;
	isClearable?: boolean;
	placeHolder?: string;
	isSearchable?: boolean;
	onChange: (value: OptionType) => void;
}

const SelectComplete: React.FC<ISelectProps> = forwardRef<
	HTMLSelectElement,
	ISelectProps
>(
	(
		{
			error,
			options = [],
			value,
			className,
			title,
			disabled,
			placeHolder,
			isClearable = false,
			isSearchable = false,
			onChange,
			...props
		},
		ref
	) => {
		const classNames = clsx("!text-black", {
			[className as string]: className,
		});
		const MenuList = (
			props: MenuListProps<OptionType, false, GroupBase<OptionType>>
		) => {
			const { children, ...menuProps } = props;
			return (
				<components.MenuList
					{...menuProps}
					className={clsx("bg-[#f5f4f4]", { "h-[130px]": options.length })}
				>
					<div className="flex flex-col divide-y text-black bg-[#f5f4f4]">
						{children}
					</div>
				</components.MenuList>
			);
		};
		const Menu = (
			props: MenuProps<OptionType, false, GroupBase<OptionType>>
		) => {
			const { children, ...menuProps } = props;
			return (
				<components.Menu
					{...menuProps}
					className="overflow-hidden bg-[#f5f4f4] scale-[99%] shadow-none"
				>
					{children}
				</components.Menu>
			);
		};
		const Option = (
			props: OptionProps<OptionType, boolean, GroupBase<OptionType>>
		) => {
			const { children, isSelected } = props;
			return (
				<components.Option {...props}>
					<div
						className={clsx(
							"bg-[#f5f4f4] px-2 font-semibold text-black text-sm h-10 flex justify-between w-full items-center hover:bg-gray-900 hover:text-white",
							{
								"text-black hover:text-white": isSelected,
								"bg-gray-50 text-gray-600 !opacity-100 hover:text-white":
									!isSelected,
							}
						)}
					>
						{children}
					</div>
				</components.Option>
			);
		};

		const Control = (
			props: ControlProps<OptionType, boolean, GroupBase<OptionType>>
		) => {
			const { children } = props;

			return (
				<components.Control {...props}>
					<div className="bg-white border border-gray-300 font-semibold text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 outline-none min-h-[40px] flex justify-between w-full h-fit">
						{children}
					</div>
				</components.Control>
			);
		};
		const MultiValueRemove = (props: MultiValueRemoveProps<OptionType>) => {
			return (
				<components.MultiValueRemove {...props}>
					{disabled && <></>}
				</components.MultiValueRemove>
			);
		};
		const ValueContainer = (props: ValueContainerProps<OptionType>) => {
			const { children } = props;
			return (
				<components.ValueContainer {...props} className="text-sm font-medium">
					{children}
				</components.ValueContainer>
			);
		};
		return (
			<div className="flex flex-col w-full relative pb-2 min-w-[40%]">
				{title && (
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						{title}
					</label>
				)}

				<ReactSelect
					ref={ref as any}
					id="react-select-3-live-region"
					instanceId="react-select-3-live-region"
					placeholder={placeHolder || "Lựa chọn"}
					options={options}
					value={
						!value ? null : options.find((item) => item?.value === value?.value)
					}
					onChange={(opt) => {
						const option = opt as OptionType;
						onChange(option);
					}}
					noOptionsMessage={({ inputValue }) =>
						!inputValue ? "Danh sách trống" : "Không tìm thấy"
					}
					className={classNames}
					isDisabled={disabled}
					styles={{
						control: (base) => ({
							...base,
							border: 0,
							boxShadow: "none",
							borderRadius: "10px",
						}),
						option: (base) => ({
							...base,
							background: "none",
							padding: 0,
						}),
						singleValue: (base) => ({
							...base,
							color: "black",
							fontWeight: "500",
						}),
					}}
					components={{
						Menu,
						MenuList,
						IndicatorSeparator: () => null,
						Option,
						Control,
						MultiValueRemove,
						ValueContainer,
					}}
					{...props}
					isClearable={isClearable}
					isSearchable={isSearchable}
				/>
				{!!error && (
					<p className="text-red-500 text-[10px] absolute bottom-[-12px]">
						{error?.message}
					</p>
				)}
			</div>
		);
	}
);
SelectComplete.displayName = "SelectComplete";
export default memo(SelectComplete);
