import React from "react";
import { ProgressLayout, RoadMapLayout } from "../atoms";

let percent = 89;
const RoadMap = () => {
	const circumference = 60 * 2 * Math.PI;
	return (
		<div>
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
			<div className="w-2/3 m-auto relative">
				<RoadMapLayout />
				<div className="bg-red-500 w-[26%] h-[18%] absolute top-[14%] left-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[24.5%] right-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[35.5%] left-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[47%] right-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[58%] left-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[69.5%] right-0"></div>
				<div className="bg-red-500 w-[26%] h-[19%] absolute top-[80.5%] left-0"></div>
			</div>
		</div>
	);
};

export default RoadMap;
