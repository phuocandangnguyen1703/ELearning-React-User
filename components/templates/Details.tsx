import React from "react";
import { Button, ImageOptimizing } from "../atoms";
import {
	AiFillCamera,
	AiFillGoogleCircle,
	AiFillRedditCircle,
	AiFillStar,
	AiFillTwitterCircle,
	AiOutlineClockCircle,
} from "react-icons/ai";
import { FiChevronDown, FiClock } from "react-icons/fi";
import { FaChartBar, FaCertificate } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { ImageComponent } from "../organisms";
import { BsBook, BsCalendarMinus } from "react-icons/bs";
import clsx from "clsx";
import { Course } from "../moleculers";

interface DetailsProps {
	imageURL: string;
}
const Details: React.FC<DetailsProps> = ({ imageURL }) => {
	return (
		<main className="bg-white">
			<div className="h-[70vh] w-full relative">
				<ImageComponent urldb={imageURL} />
			</div>

			<div className="w-full h-fit bg-white flex px-28 py-16">
				<div className="flex-[2] h-full px-28 flex flex-col gap-8">
					<div className="w-full h-fit max-h-screen bg-white overflow-hidden p-4 rounded-xl flex flex-col">
						<h1 className="text-black font-semibold text-2xl">
							Course Contents
						</h1>
						<div className="flex flex-col gap-2 flex-1 overflow-hidden">
							<div className="flex items-center justify-between">
								<p className="text-sm uppercase text-[#2F80ED]">
									2/5 COMPLETED
								</p>
								<p className="text-sm uppercase text-[#2F80ED]">
									<BsCalendarMinus size={18} />
								</p>
							</div>
							<div className="flex gap-1">
								{[1, 2, 3, 4, 5].map((item) => (
									<span
										key={item}
										className={clsx("flex-1 h-1 bg-[#2F80ED]", {
											"opacity-25": item > 2,
										})}
									/>
								))}
							</div>
							<div className="flex flex-col gap-4 flex-1 overflow-y-auto">
								{[1, 2, 3].map((key) => (
									<div key={key} className="h-fit p-2 px-4 border rounded-xl">
										<div
											data-te-collapse-init
											data-te-ripple-init
											data-te-ripple-color="light"
											data-te-target={`#collapse${key}`}
											aria-expanded="false"
											aria-controls="collapse"
											className="flex flex-col gap-2 cursor-pointer"
										>
											<div className="flex justify-between items-center">
												<p>Get Started</p>
												<span className="chev ease-linear transition-all duration-100">
													<FiChevronDown size={20} />
												</span>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-1 text-xs text-[#252641CC]">
													<AiOutlineClockCircle size={14} />
													<span>1 Hour</span>
												</div>
												<div className="flex items-center gap-1 text-xs text-[#252641CC]">
													<BsBook size={14} />
													<span>5 Lessons</span>
												</div>
											</div>
										</div>
										<div
											className="!visible hidden divide-y-2"
											id={`collapse${key}`}
											data-te-collapse-item
										>
											{[1, 2, 3, 4].map((lesson) => (
												<div className="p-2 py-4 flex items-center justify-between text-sm">
													<p>{lesson}.Lorem ipsum dolor sit amet</p>
													<p>65:00</p>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						{[1, 2, 3, 4].map((num) => (
							<Button
								key={num}
								className="font-semibold !bg-[#0000001A] !text-[#00000069]"
							>
								Overview
							</Button>
						))}
					</div>
					<div className="flex-1 w-full bg-[#9DCCFF4D] rounded-2xl p-6 overflow-hidden gap-2 flex flex-col">
						<div className="h-40 flex gap-9">
							<div className="w-48 h-full bg-white rounded-2xl flex flex-col justify-center items-center gap-2">
								<h2 className="font-bold text-[#00000080] text-2xl">
									4 out of 5
								</h2>
								<div className="flex gap-1">
									{[1, 2, 3, 4].map((num) => (
										<AiFillStar color="orange" key={num} />
									))}
								</div>
								<h2 className="font-normal text-[#00000080] text-xl">
									Top Raiting
								</h2>
							</div>
							<div className="flex-1 h-full bg-white rounded-2xl p-2 flex flex-col gap-2">
								{[1, 2, 3, 4, 5].reverse().map((item) => (
									<div className="flex items-center gap-2" key={item}>
										<p className="text-[#00000080]">{item} Stars</p>
										<div className="bg-[#D9D9D9] flex-1 h-2 rounded-3xl relative overflow-hidden">
											<span className="bg-[#2F80ED] w-[80%] h-2 absolute left-0 top-0 rounded-3xl"></span>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col flex-1 overflow-auto h-full p-4 gap-3">
							{[1, 2].map((item) => (
								<div className="flex items-center">
									<div className="flex flex-col">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<img
													className="h-10 w-10 rounded-full"
													src="/avatar.png"
													alt="Avatar"
												/>
											</div>
											<div className="ml-4">
												<h2 className="text-base font-bold text-gray-900">
													Lina
												</h2>
												<div className="flex gap-1">
													{[1, 2, 3, 4].map((num) => (
														<AiFillStar color="orange" key={num} />
													))}
												</div>
											</div>
										</div>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Exercitationem mollitia dolores dolorem laudantium at illo
											ipsum, doloribus, fugit consequuntur porro facere,
											voluptatem facilis adipisci eveniet. Facere voluptatem
											incidunt dolorem aut?
										</p>
									</div>
									<div className="whitespace-nowrap flex justify-center items-center gap-1 opacity-75">
										<FiClock color="gray" />
										<span className="text-xs"> 3 months</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex-1 bg-white shadow-md rounded-lg h-fit p-6 flex flex-col gap-4 -translate-y-[280px]">
					<div className="h-[180px]">
						<ImageOptimizing
							blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
							src="/banner_details.png"
						/>
					</div>
					<div className="flex gap-4 items-center pt-2">
						<p className="text-2xl font-bold text-black">$49.65</p>
						<p className="text-base font-bold text-[#00000080]">$99.99</p>
						<p className="text-base font-bold text-[#00000080]">50% Off</p>
					</div>
					<p className="text-[#2F80ED] text-sm font-bold text-center">
						11 hour left at this price
					</p>
					<Button className="w-full text-base !bg-[#2F80ED] font-bold h-10">
						Buy Now
					</Button>
					<div className="h-[1px] w-full bg-black"></div>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							{[1, 2, 3].map((item) => (
								<span className="bg-blue-500 rounded-full h-fit w-fit px-4 text-xs py-[1px] text-white">
									tag
								</span>
							))}
						</div>
						<h2 className="text-xl font-bold text-black">
							This Course included
						</h2>
						<div className="flex gap-2 items-center">
							<FaCertificate size={24} color="#2F80ED" />
							<p className="text-sm font-bold text-[#00000080]">
								Money Back Guarantee
							</p>
						</div>
						<div className="flex gap-2 items-center">
							<AiFillCamera size={24} color="#2F80ED" />
							<p className="text-sm font-bold text-[#00000080]">
								Access on all devices
							</p>
						</div>
						<div className="flex gap-2 items-center">
							<HiDocumentText size={24} color="#2F80ED" />
							<p className="text-sm font-bold text-[#00000080]">
								Certification of completion
							</p>
						</div>
						<div className="flex gap-2 items-center">
							<FaChartBar size={20} color="#2F80ED" />
							<p className="text-sm font-bold text-[#00000080]">32 Moduls</p>
						</div>
					</div>
					<div className="h-[1px] w-full bg-black"></div>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-black">
							Training 5 or more people
						</h2>
						<p className="text-[#696984] text-sm">
							Class, launched less than a year ago by Blackboard co-founder
							Michael Chasen, integrates exclusively...
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-black">Share this course</h2>
						<div className="flex items-center gap-2">
							<AiFillTwitterCircle size={18} />
							<AiFillGoogleCircle size={18} />
							<AiFillRedditCircle size={18} />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full min-h-[80vh] p-20 flex flex-col gap-2 bg-[#9DCCFF] mix-blend-normal bg-opacity-20">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-bold text-black">Marketing Articles</h2>

					<Button className="uppercase" outline>
						Xem tất cả
					</Button>
				</div>
				<div className="flex justify-between flex-wrap gap-4">
					{[1, 2, 3, 4, 5].map((item) => (
						<Course key={item} />
					))}
				</div>
			</div>
			<div className="h-fit w-full p-10">
				<div className="flex p-12 gap-6 h-[60vh] items-center">
					<div className="flex flex-col gap-3 flex-1">
						<h2 className="text-3xl font-semibold text-gray-900">
							Everything you can do in a physical classroom, you can do with
							TOTC
						</h2>
						<p className="text-[#696984] text-base">
							TOTC’s school management software helps traditional and online
							schools manage scheduling, attendance, payments and virtual
							classrooms all in one secure cloud-based system.
						</p>
						<p className="underline">Learn more</p>
					</div>
					<div className="h-full flex-1 rounded-lg overflow-hidden">
						<ImageOptimizing
							blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
							src="/banner_details.png"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-start">
						<h2 className="text-xl font-bold text-black">
							Top Education offers and deals are listed here
						</h2>
					</div>
					<div className="flex justify-between flex-wrap">
						{[1, 2, 3, 4, 5].map((item) => (
							<div
								key={item}
								className="h-[260px] bg-white w-[260px]
						rounded-lg flex flex-col gap-1 shadow-md relative p-4"
							>
								<div className="h-full w-full rounded-lg overflow-hidden absolute top-0 left-0 z-1 opacity-80">
									<ImageOptimizing
										blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
										src="/banner_details.png"
									/>
								</div>
								<div className="relative z-2 flex flex-col gap-4">
									<div className="relative z-2">
										<p className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500 text-white font-bold text-base text-center ">
											50%
										</p>
									</div>
									<div className="flex flex-col gap-2 font-semibold">
										<h2>FOR INSTRUCTORS</h2>
										<p>
											TOTC’s school management software helps traditional and
											online schools manage scheduling,
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Details;
