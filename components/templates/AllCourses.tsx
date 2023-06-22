import { StateStoreType } from "@/pages/allcourse";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Button, Select, TextField } from "../atoms";
import { OptionType } from "@/types/common";
import { Course, Pagination } from "../moleculers";
interface AllCoursesProps {
	stateStore: UseFormReturn<StateStoreType, any>;
}
const AllCourses: React.FC<AllCoursesProps> = ({ stateStore }) => {
	return (
		<div>
			<div className="h-44 flex items-center justify-center bg-[url('/bg-all-courses.png')] bg-cover flex-col gap-2">
				<div className="bg-white rounded-lg flex items-center justify-center h-12 w-2/3 p-4">
					<Controller
						name="search"
						control={stateStore.control}
						render={({ field }) => (
							<TextField
								{...field}
								className="flex-1 !border-none !h-full outline-none"
								placeholder="Search your favourite course"
							/>
						)}
					/>

					<Button className="flex items-center justify-center !bg-[#0066FF]">
						Search
					</Button>
				</div>
				<div className="flex items-center justify-center gap-4">
					<Controller
						name="type"
						control={stateStore.control}
						render={({ field }) => (
							<Select placeHolder="Type" options={[]} {...field} />
						)}
					/>
					<Controller
						name="type"
						control={stateStore.control}
						render={({ field }) => (
							<Select placeHolder="Author" options={[]} {...field} />
						)}
					/>
					<Controller
						name="type"
						control={stateStore.control}
						render={({ field }) => (
							<Select placeHolder="Price" options={[]} {...field} />
						)}
					/>
					<Controller
						name="type"
						control={stateStore.control}
						render={({ field }) => (
							<Select placeHolder="Language" options={[]} {...field} />
						)}
					/>
					<Controller
						name="type"
						control={stateStore.control}
						render={({ field }) => (
							<Select placeHolder="Level" options={[]} {...field} />
						)}
					/>
				</div>
			</div>
			<div className="w-[70%] m-auto mt-10">
				<div className="grid grid-cols-4 grid-rows-2 gap-4">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
						<Course key={item} />
					))}
				</div>
				<div className="mt-5">
					<Pagination onChange={(e) => 1} pageSize={5} currentPage={3} />
				</div>

				<div className="py-4 mt-6">
					<div className="flex justify-between items-center overflow-auto">
						<h2 className="uppercase text-xl font-medium">KHóa học phổ biến</h2>
						<Button
							className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
							outline
						>
							Xem tất cả
						</Button>
					</div>
					<div className="flex gap-4 overflow-x-auto">
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
							<Course key={item} fitWidth />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllCourses;
