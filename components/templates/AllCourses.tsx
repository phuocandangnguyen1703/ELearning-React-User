import { StateStoreType } from "@/pages/course";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Button, Select, TextField } from "../atoms";
import { Course, Pagination } from "../moleculers";
interface CoursesProps {
	stateStore: UseFormReturn<StateStoreType, any>;
	handleSearch: () => void;
	onChangeFilter: () => void;
}
const AllCourses: React.FC<CoursesProps> = ({
	stateStore,
	handleSearch,
	onChangeFilter,
}) => {
	return (
		<div className="flex flex-col items-center overflow-x-hidden">
			<div className="w-full h-44 flex items-center justify-center bg-[url('/bg-all-courses.png')] bg-cover flex-col gap-2">
				<div className="bg-white rounded-lg flex items-center justify-center h-12 w-2/3 p-4">
					<Controller
						name="search"
						control={stateStore.control}
						render={({ field }) => (
							<TextField
								{...field}
								className="flex-1 !border-none !h-full outline-none"
								placeholder="Tìm kiếm khoá học bạn cần tại đây"
							/>
						)}
					/>

					<Button
						className="flex items-center justify-center !bg-[#0066FF]"
						onClick={handleSearch}
					>
						Tìm
					</Button>
				</div>
				<div className="flex items-center justify-center gap-4">
					<Controller
						name="option.maintypes"
						control={stateStore.control}
						render={({ field: { value: opts } }) => (
							<Controller
								name="maintype_id"
								control={stateStore.control}
								render={({ field }) => (
									<Select
										placeHolder="Chủ đề"
										options={opts}
										value={field.value}
										onChange={(v) => {
											field.onChange(v);
											onChangeFilter();
										}}
										isClearable
									/>
								)}
							/>
						)}
					/>
					<Controller
						name="option.languages"
						control={stateStore.control}
						render={({ field: { value: opts } }) => (
							<Controller
								name="language"
								control={stateStore.control}
								render={({ field }) => (
									<Select
										placeHolder="Language"
										options={opts}
										value={field.value}
										onChange={(v) => {
											field.onChange(v);
											onChangeFilter();
										}}
									/>
								)}
							/>
						)}
					/>
					<Controller
						name="option.levels"
						control={stateStore.control}
						render={({ field: { value: opts } }) => (
							<Controller
								name="level"
								control={stateStore.control}
								render={({ field }) => (
									<Select
										placeHolder="Level"
										options={opts}
										value={field.value}
										onChange={(v) => {
											field.onChange(v);
											onChangeFilter();
										}}
									/>
								)}
							/>
						)}
					/>
				</div>
			</div>
			<Controller
				name="page"
				control={stateStore.control}
				defaultValue={1}
				render={({ field: { value: page, onChange } }) => (
					<div className="max-w-full min-w-[70%] mt-10 flex flex-col items-center">
						<Controller
							control={stateStore.control}
							name="courses"
							render={({ field: { value: courses } }) => (
								<>
									<div className="grid grid-cols-4 grid-rows-2 gap-4 content-center">
										{courses
											.slice((page - 1) * 10, page * 10 + 10)
											.map((course) => (
												<Course key={course} fitWidth courseId={course} />
											))}
									</div>
									<div className="mt-5">
										<Pagination
											pageSize={Math.ceil(courses.length / 10)}
											currentPage={page}
											onChange={(p) => onChange(p)}
										/>
									</div>
								</>
							)}
						/>
					</div>
				)}
			/>
		</div>
	);
};

export default AllCourses;
