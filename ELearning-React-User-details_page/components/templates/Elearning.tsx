import clsx from "clsx";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBook, BsCalendarMinus } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";
const Elearning = () => {
	return (
		<div className="bg-[#9DCCFF] p-8 flex justify-center  h-screen items-center">
			<div className="w-4/5 m-auto h-full flex items-center justify-between gap-4">
				<div className="flex-[3] h-full flex flex-col gap-2">
					<div className="flex gap-2 h-24 justify-between items-center ">
						<Link
							href="/courses"
							className="w-9 h-9 bg-[#2F80ED] text-white flex items-center justify-center"
						>
							<MdOutlineArrowBack size={20} />
						</Link>
						<div className="w-full h-fit bg-white rounded-xl p-3 flex-1">
							<div className="flex flex-col">
								<h1 className="text-black font-semibold text-2xl">
									Course Contents
								</h1>

								<div className="flex items-center gap-4 text-xs">
									<p>9 Lesson</p>
									<p>6h 30min</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 py-3 rounded-xl overflow-hidden">
						<iframe
							className="w-full h-full rounded-xl"
							src="https://www.youtube.com/embed/CXJERScLi30"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</div>
				<div className="flex-[1.5] h-full flex flex-col gap-8">
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
				</div>
			</div>
		</div>
	);
};

export default Elearning;
