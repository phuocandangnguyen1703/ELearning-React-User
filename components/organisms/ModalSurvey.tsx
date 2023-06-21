import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { Button } from "../atoms";
import SelectComplete from "../atoms/SelectComplete";
import { Controller, useForm } from "react-hook-form";
const QUESTIONS = [
	{
		name: "q1",
		type: "button",
		questions: [
			"Chào bạn, mình là Usagi - Trợ lý AI của EduPath. Mình cần một số thông tin từ bạn để tạo các lộ trình theo lĩnh vực phù hợp nhất với bạn.",
			"Vui lòng cho mình biết bạn đang là đối tượng nào",
		],
		options: [
			{ value: "Học sinh", label: "Học sinh" },
			{ value: "Sinh viên", label: "Sinh viên" },
			{ value: "Người đi làm", label: "Người đi làm" },
		],
	},
	{
		name: "q2",
		type: "button",
		questions: ["Bạn đã có kinh nghiệm về lập trình chưa?"],
		options: [
			{ value: "Rồi", label: "Rồi" },
			{ value: "Chưa có", label: "Chưa có" },
		],
	},
	{
		name: "q3",
		type: "input",
		questions: [
			"Hãy liệt kê một số kỹ năng hoặc ngôn ngữ lập trình mà bạn từng sử dụng nhé",
		],
	},
];
const ModalSurvey = () => {
	const bottomRef = useRef<HTMLDivElement>(null);
	const [onForcus, setOnForcus] = useState(false);
	useEffect(() => {
		const bodyElement = document.querySelector("body");
		if (bodyElement) bodyElement.classList.add("!overflow-hidden", "relative");

		return () => {
			if (bodyElement) bodyElement.classList.remove("!overflow-hidden");
		};
	}, []);

	const [questions, setQuestions] = useState<Array<(typeof QUESTIONS)[0]>>([
		QUESTIONS[0],
	]);
	const [response, setResponse] = useState<Record<string, Array<string>>>();
	const { control } = useForm({
		defaultValues: {
			programings: {},
		},
	});
	const handelNextQuestion = (value: Array<string>, name: string) => {
		setResponse((r) => ({ ...r, [name]: [...value] }));
		if (questions.length < QUESTIONS.length)
			setQuestions((q) => [...q, QUESTIONS[q.length]]);
	};
	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useLayoutEffect(() => {
		const time = setTimeout(() => {
			scrollToBottom();
		}, 300);
		return () => clearTimeout(time);
	}, [questions, onForcus]);
	return (
		<div className="bg-[#50505072] fixed top-0 bottom-0 z-50 h-screen w-screen flex items-center justify-center">
			<div className={clsx("w-2/3 h-4/5 bg-white flex overflow-hidden", {})}>
				<div className="flex-[2] bg-[#D8EDFF] h-full relative flex flex-col">
					<div className="w-full flex flex-col gap-2 p-10">
						<h2 className="text-2xl text-[#16325C] font-bold text-center">
							CHÀO MỪNG ĐẾN VỚI EDUPATH
						</h2>
						<p className="text-xs text-[#666666] leading-6 mt-3">
							Vui lòng hoàn thành khảo sát nhanh cùng Usagi để EduPath giúp bạn
							tạo lộ trình học tập riêng phù hợp nhé!
						</p>
					</div>
					<div className="flex-1 flex items-center justify-center flex-col gap-2">
						<p className="text-xs font-semibold text-[#16325C]">
							{(response && Object.keys(response)?.length) || 0}/
							{QUESTIONS?.length || 0} câu đã hoàn thành
						</p>
						<div className="w-1/2 h-2 bg-white relative rounded-full overflow-hidden">
							<span
								className={clsx(
									"h-2 bg-[#5EB4FF] absolute top-0 left-0 transition-all ease-linear duration-700",
									{
										"w-0": response && Object.keys(response).length === 0,
										"w-1/3": response && Object.keys(response).length === 1,
										"w-2/3": response && Object.keys(response).length === 2,
										"w-3/3": response && Object.keys(response).length === 3,
									}
								)}
							></span>
						</div>
					</div>
					<div className="bg-[url('/bg_info.png')] absolute -bottom-1 w-full h-[70px] bg-cover bg-no-repeat " />
				</div>

				<div className="flex-[3] h-full flex flex-col relative">
					<div className="bg-[#103D9C] h-16 flex items-center justify-start gap-2">
						<div className="flex -mr-2">
							<RxDotFilled size={30} color="#34A853" />
						</div>
						<div className="h-[50px] w-[50px] p-1 rounded-full bg-white">
							<Image
								src="/usagi.svg"
								alt="usagi"
								className="w-full h-full"
								width={100}
								height={100}
							/>
						</div>
						<div>
							<h2 className="font-medium text-base text-white">Usagi</h2>
							<p className="text-xs italic text-white font-light">Trợ lý AI</p>
						</div>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={questions?.length}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="flex-1 h-full p-3 flex flex-col gap-3 overflow-x-auto "
						>
							{questions.map((question) => (
								<div
									className={clsx("flex flex-col gap-3", {
										// "mb-[100px]":
										// 	questions[questions.length - 1].type === "input" &&
										// 	question.type === "input",
									})}
								>
									<div className="flex items-center gap-2">
										<div className="self-start h-[50px] w-[50px] p-1 rounded-full bg-white">
											<Image
												src="/usagi.svg"
												alt="usagi"
												className="w-full h-full"
												width={100}
												height={100}
											/>
										</div>
										<div className="flex flex-col w-2/3 gap-3">
											{question?.questions.map((content) => (
												<p className="bg-[#F5F5F5] p-2 text-sm rounded-lg">
													{content}
												</p>
											))}
										</div>
									</div>
									<div className="flex gap-3">
										<span className="self-start w-[50px] p-1 rounded-full bg-white" />
										<div className="flex gap-3">
											{question?.options?.map((item) => (
												<Button
													onClick={() =>
														handelNextQuestion([item.value], question.name)
													}
													className="!bg-[#103D9C]"
												>
													{item.label}
												</Button>
											))}
										</div>
									</div>
									{response?.[question?.name] &&
										response?.[question?.name]?.map((res) => (
											<div className="flex justify-end">
												<Button className="!bg-[#103D9C] w-fit">{res}</Button>
											</div>
										))}
								</div>
							))}

							{questions[questions.length - 1]?.type == "input" && (
								<div
									ref={bottomRef}
									className="h-fit z-50 left-0 bottom-0 w-full focus-within:!pb-[300px]  bg-white"
									onFocus={() => setOnForcus((r) => !r)}
								>
									<Controller
										name="programings"
										control={control}
										render={({ field }) => (
											<SelectComplete
												title=""
												value={field.value as any}
												onChange={field.onChange}
												className="w-full h-full"
												options={[
													{ label: "Javascript", value: "js" },
													{ label: "Javascript2", value: "js1" },
												]}
												isMulti
											/>
										)}
									/>
								</div>
							)}
							<div ref={bottomRef} className="w-full h-[2px]"></div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default ModalSurvey;
