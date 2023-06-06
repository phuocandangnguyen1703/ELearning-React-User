import React from "react";
import { ProgressLayout, RoadMapLayout, TagSkill } from "../atoms";

let percent = 89;
const RoadMap = () => {
	const circumference = 60 * 2 * Math.PI;
	return (
		<div className="bg-white">
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
			<div className="w-4/5 m-auto relative">
				<RoadMapLayout />
				<div className="w-[26%] px-3 h-[18%] absolute top-[12.5%] left-0 py-8">
					<h2 className="-translate-y-[3.2rem] lg:-translate-y-[140%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-4 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[24.5%] right-0">
					<h2 className="-translate-y-[4.2rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[35.5%] left-0">
					<h2 className="-translate-y-[4.1rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[47%] right-0">
					<h2 className="-translate-y-[4.2rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[58%] left-0">
					<h2 className="-translate-y-[4.3rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[69.5%] right-0">
					<h2 className="-translate-y-[4.3rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
				<div className="w-[26%] py-8 px-3 h-[19%] absolute top-[80.5%] left-0">
					<h2 className="-translate-y-[4.2rem] lg:-translate-y-[205%] text-center text-white text-[1.8vw] font-bold">
						Basic knowledge
					</h2>
					<div className="w-full h-fit grid grid-cols-2 -mt-10 gap-2">
						<TagSkill isMarker>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
						<TagSkill>Blockchain definition</TagSkill>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoadMap;
