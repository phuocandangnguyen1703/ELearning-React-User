import { StateStoreType } from "@/pages/courses/roadmap";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ProgressLayout } from "../atoms";
import { MapItem } from "../moleculers";
import { SkillType } from "../moleculers/MapItem";
import { ModalRoadMap } from "../organisms";

let percent = 49;
export type MapDataType = {
	title: string;
	skills: Array<SkillType>;
};
interface RoadMapProps {
	stateStore: UseFormReturn<StateStoreType, any>;
	dataRoadMap: Array<MapDataType>;
}
const RoadMap: React.FC<RoadMapProps> = ({ dataRoadMap, stateStore }) => {
	const circumference = 60 * 2 * Math.PI;
	return (
		<div className="bg-white">
			<Controller
				name="isOpenModel"
				control={stateStore.control}
				render={({ field: { value, onChange } }) => {
					return (
						<>{value && <ModalRoadMap onClose={() => onChange(false)} />}</>
					);
				}}
			/>

			<div className="bg-[url('/bg_skill.png')] h-screen w-full right-0 bg-no-repeat absolute z-10 top-0 bg-right-top blur-lg"></div>
			<div className="bg-[url('/bg_skill_2.png')] h-screen w-full right-0 bg-no-repeat absolute z-10 top-0 bg-left-top blur-lg"></div>
			<div className="h-[50vh] w-2/3 m-auto p-14 flex gap-10">
				<div className="flex flex-1 flex-col gap-3">
					<h2>Chào mừng quay lại với lộ trình trở thành</h2>
					<h1 className="font-bold text-3xl text-[#5F6368]">
						Android Developer
					</h1>
					<div className="mt-9 flex items-center gap-10">
						<div className="flex flex-col justify-center items-center">
							<p>Title 1</p>
							<div className="w-28 h-28 shadow-lg bg-white rounded-2xl"></div>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p>Title 2</p>
							<div className="w-28 h-28 shadow-lg bg-white rounded-2xl"></div>
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col relative">
					<h2 className="text-[#0066FF] font-bold text-lg ml-10">
						Tiến độ hoàn thành
					</h2>
					<div className="w-[200px] overflow-hidden">
						<div className="w-[400px] h-[220px] absolute top-[20px] left-0">
							<ProgressLayout />
							<div className="absolute top-[37px] left-[67px]">
								<svg className="w-[162px] h-[162px]">
									<circle
										className="text-white"
										strokeWidth={30}
										stroke="currentColor"
										fill="transparent"
										r={60}
										cx={80}
										cy={80}
									/>
									<circle
										className="text-blue-500"
										strokeWidth={30}
										strokeDasharray={
											percent !== 100 ? circumference - 30 : circumference
										}
										strokeDashoffset={
											circumference - (percent / 100) * circumference
										}
										strokeLinecap="round"
										stroke="currentColor"
										fill="transparent"
										r={60}
										cx={80}
										cy={80}
									/>
								</svg>
							</div>
							<p className="absolute text-lg text-gray-500 font-bold top-[108px] left-[126px]">
								{percent}%
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-4/5 m-auto relative mt-28 grid grid-cols-2 pb-20 z-20">
				{dataRoadMap.map((item, index) => (
					<MapItem
						onTap={() => stateStore.setValue("isOpenModel", true)}
						numStep={index + 1}
						key={item.title}
						skills={item.skills}
						title={item.title}
						odd={(index + 1) % 2 == 0}
					/>
				))}
			</div>
		</div>
	);
};

export default RoadMap;
