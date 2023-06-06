import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { FcNext, FcPrevious } from "react-icons/fc";
import {
	RiBookOpenFill,
	RiEmotionHappyFill,
	RiEmotionUnhappyFill,
} from "react-icons/ri";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Button } from "../atoms";
import { closeModal } from "@/redux/features/slices/modal";
import { Controller, useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
const LIST_STEP1 = [
	{
		icon: <RiBookOpenFill size={30} color="#706e6b" />,
		title: "Pupil",
	},
	{
		icon: <FaGraduationCap size={30} color="#706e6b" />,
		title: "Student",
	},
	{
		icon: <MdWork size={30} color="#706e6b" />,
		title: "Worker",
	},
];
const PROGRAMIMGS = ["html", "css", "javascrpit", "reactjs"];
const ModalSurvey = () => {
	const dispatch = useDispatch();
	const formStep1 = useForm({
		defaultValues: {
			occupation: "",
			have_programming: "",
		},
	});
	useEffect(() => {
		const bodyElement = document.querySelector("body");
		if (bodyElement) bodyElement.classList.add("!overflow-hidden", "relative");

		return () => {
			if (bodyElement) bodyElement.classList.remove("!overflow-hidden");
		};
	}, []);
	const MODEMODAL = {
		step1: (
			<div className="flex flex-col h-full">
				<h3 className="text-lg text-[#16325C] font-bold">You are...</h3>
				<div className="flex flex-col py-4 gap-4">
					<Controller
						control={formStep1.control}
						defaultValue=""
						name="occupation"
						render={({ field }) => (
							<>
								{LIST_STEP1.map((item) => {
									return (
										<div
											className={clsx(
												"bg-white shadow-lg rounded-md flex h-[70] w-full border border-[#7b7b7b68] py-4 divide-x-2 cursor-pointer",
												{ "opacity-60": field.value === item.title }
											)}
											onClick={() => field.onChange(item.title)}
										>
											<div className="w-20 h-full flex items-center justify-center relative">
												{item.icon}

												{field.value === item.title && (
													<span className="absolute right-5 top-6">
														<BsCheckCircleFill size={16} color="green" />
													</span>
												)}
											</div>
											<p className="flex-1 h-full flex text-sm items-center p-2 px-10 text-[#3E3E3C]">
												{item.title}
											</p>
										</div>
									);
								})}
							</>
						)}
					/>
				</div>
				<h3 className="text-lg text-[#16325C] font-bold">
					Do you have any programming experience?
				</h3>
				<div className="flex gap-8 justify-between mt-4">
					<Controller
						control={formStep1.control}
						defaultValue=""
						name="have_programming"
						render={({ field }) => (
							<>
								<div
									className={clsx(
										"bg-white flex-1 shadow-lg rounded-md flex h-[70] w-full border border-[#7b7b7b68] py-4 divide-x-2 cursor-pointer",
										{ "opacity-60": field.value === "yes" }
									)}
									onClick={() => field.onChange("yes")}
								>
									<div className="w-20 h-full flex items-center justify-center relative">
										<RiEmotionHappyFill size={30} color="#706e6b" />
										{field.value === "yes" && (
											<span className="absolute right-5 top-6">
												<BsCheckCircleFill size={16} color="green" />
											</span>
										)}
									</div>
									<p className="flex-1 h-full flex text-sm items-center p-2 px-10 text-[#3E3E3C]">
										Yes
									</p>
								</div>
								<div
									className={clsx(
										"bg-white flex-1 shadow-lg rounded-md flex h-[70] w-full border border-[#7b7b7b68] py-4 divide-x-2 cursor-pointer",
										{ "opacity-60": field.value === "no" }
									)}
									onClick={() => field.onChange("no")}
								>
									<div className="w-20 h-full flex items-center justify-center relative">
										<RiEmotionUnhappyFill size={30} color="#706e6b" />
										{field.value === "no" && (
											<span className="absolute right-5 top-6">
												<BsCheckCircleFill size={16} color="green" />
											</span>
										)}
									</div>
									<p className="flex-1 h-full flex text-sm items-center p-2 px-10 text-[#3E3E3C]">
										No
									</p>
								</div>
							</>
						)}
					/>
				</div>
				<div className="flex-1 flex justify-end items-center">
					<div
						className="flex justify-center items-center gap-2 cursor-pointer"
						onClick={() => setStep("step2")}
					>
						<p className="text-[#2F80ED] text-sm">Next</p>
						<FcNext size={15} />
					</div>
				</div>
			</div>
		),
		step2: (
			<div className="flex flex-col h-full gap-4">
				<h3 className="text-lg text-[#16325C] font-bold">
					Please list some skills or programming language you have already known
					how to use
				</h3>
				<p className="text-sm text-[#3E3E3C]">Your skills *</p>
				<input
					className="text-[12px] h-6 text-[#3E3E3C] font-light italic border-b-2 border-[#F0F0F3] w-full px-2 py-4 outline-none"
					placeholder="Ex: python"
				/>
				<div className="flex-1">
					<p className="text-sm text-[#3E3E3C]">Suggest:</p>
					<div className="flex gap-3 flex-wrap py-3">
						{PROGRAMIMGS.map((item) => (
							<p className="px-2 py-1 text-xs rounded-lg font-semibold border border-[#249AFF] text-[#249AFF] w-fit">
								{item}
							</p>
						))}
					</div>
				</div>

				<div className="flex justify-between justify-self-end items-center">
					<div
						className="flex justify-center items-center gap-2 cursor-pointer"
						onClick={() => setStep("step1")}
					>
						<FcPrevious size={15} />
						<p className="text-[#2F80ED] text-sm">Back</p>
					</div>
					<div
						className="flex justify-center items-center gap-2 cursor-pointer"
						onClick={() => setStep("finish")}
					>
						<p className="text-[#2F80ED] text-sm">Finish</p>
					</div>
				</div>
			</div>
		),
		finish: (
			<div className="flex flex-col  w-full h-full gap-4 items-center relative">
				<div className="w-[60%] items-center justify-center flex flex-col gap-2 p-12">
					<h2 className="text-2xl text-[#16325C] font-bold">Title</h2>
					<p className="text-xs text-[#666666] leading-6 mt-3">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo earum
						voluptates suscipit quasi impedit eum quia veritatis quis, error
						velit aspernatur ut aperiam doloremque iste non laborum beatae
						labore! Aperiam.
					</p>
				</div>
				<Button onClick={() => dispatch(closeModal())}>Close</Button>
				<div className="bg-[url('/bg_info_2x.png')] absolute -bottom-1 w-full h-[200px] bg-cover bg-no-repeat " />
			</div>
		),
	};
	const [step, setStep] = useState<keyof typeof MODEMODAL>("step1");

	return (
		<div className="bg-[#50505072] fixed top-0 bottom-0 z-50 h-screen w-screen flex items-center justify-center">
			<div
				className={clsx("w-2/3 h-4/5 bg-white flex overflow-hidden", {
					"rounded-r-lg": step !== "finish",
					"rounded-lg": step === "finish",
				})}
			>
				{step == "finish" ? (
					MODEMODAL["finish"]
				) : (
					<>
						<div className="flex-[2] bg-[#D8EDFF] h-full relative flex flex-col">
							<div className="w-full flex flex-col gap-2 p-12">
								<h2 className="text-2xl text-[#16325C] font-bold">
									WELCOME TO EDUPATH!
								</h2>
								<p className="text-xs text-[#666666] leading-6 mt-3">
									Please complete this short survey so we can help you create
									your own learning path
								</p>
							</div>
							<div className="flex-1 flex items-center justify-center flex-col gap-2">
								<p className="text-sm font-medium text-[#16325C]">
									#/# units completed
								</p>
								<div className="w-1/2 h-1 bg-white relative">
									<span
										className={clsx(
											"h-1 bg-[#5EB4FF] absolute top-0 left-0 transition-all ease-linear duration-700",
											{
												"w-0": step === "step1",
												"w-1/2": step === "step2",
											}
										)}
									></span>
								</div>
							</div>
							<div className="bg-[url('/bg_info.png')] absolute -bottom-1 w-full h-[70px] bg-cover bg-no-repeat " />
						</div>

						<AnimatePresence mode="wait">
							<motion.div
								className="flex-[3] h-full py-8 px-12"
								key={step}
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -10, opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								{MODEMODAL[step]}
							</motion.div>
						</AnimatePresence>
					</>
				)}
			</div>
		</div>
	);
};

export default ModalSurvey;
