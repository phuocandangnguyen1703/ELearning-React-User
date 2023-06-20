import React from "react";
import { ImageOptimizing } from "../atoms";
import { BiCategory } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import clsx from "clsx";
interface CourseProps {
	fitWidth?: boolean;
}
const Course: React.FC<CourseProps> = ({ fitWidth }) => {
	return (
		<div
			className={clsx(
				"h-[360px] bg-white w-[260px] rounded-lg p-4 flex flex-col gap-1 shadow-md",
				{
					"min-w-[260px]": fitWidth,
				}
			)}
		>
			<div className="h-[140px] rounded-lg overflow-hidden">
				<ImageOptimizing
					blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
					src="/banner_details.png"
				/>
			</div>
			<div className="flex items-center justify-between p-2">
				<div className="whitespace-nowrap flex justify-center items-center gap-1 opacity-75">
					<BiCategory color="gray" />
					<span className="text-xs"> Design</span>
				</div>
				<div className="whitespace-nowrap flex justify-center items-center gap-1 opacity-75">
					<FiClock color="gray" />
					<span className="text-xs"> 3 months</span>
				</div>
			</div>
			<h2 className="text-base font-semibold text-black">
				AWS Certified solutions Architect
			</h2>
			<p className="line-clamp-3 text-sm opacity-70">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
				eligendi ratione libero, quis voluptatum voluptate
			</p>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<img
							className="h-10 w-10 rounded-full"
							src="/avatar.png"
							alt="Avatar"
						/>
					</div>
					<div className="ml-4">
						<h2 className="text-base font-bold text-gray-900">Lina</h2>
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<p className="line-through text-sm opacity-50">$100</p>
					<p className="text-lg text-[#2F80ED] font-bold">$80</p>
				</div>
			</div>
		</div>
	);
};

export default Course;
