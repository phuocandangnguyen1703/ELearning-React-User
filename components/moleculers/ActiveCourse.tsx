import { getCourse } from "@/apis/course";
import { ICourse } from "@/types/course";
import React, { useEffect, useState } from "react";
import { Button, ImageOptimizing } from "../atoms";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { converDateTime } from "@/utils/index";
import { BsCart3, BsPeople } from "react-icons/bs";
import Link from "next/link";

type Props = {
	courseId?: string;
};

const ActiveCourse = ({ courseId }: Props) => {
	const [course, setCourse] = useState<ICourse | undefined>(undefined);
	useEffect(() => {
		if (!courseId) return;
		getCourse(courseId)
			.then((success) => setCourse(success.data))
			.catch((error) => console.log(error));
	}, [courseId]);
	return (
		<div className="flex-[2] h-full overflow-auto ">
			<div className="h-[45%] w-full">
				<ImageOptimizing
					blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
					src={`${process.env.BACKEND}${course?.course_img}`}
				/>
			</div>
			<div className="p-3">
				<div className="flex items-center justify-between">
					<div className="flex flex-wrap gap-2">
						{course?.tag_name && (
							<Button className="!bg-[#ECF0FF] !text-[#0066FF]">
								{course?.tag_name}
							</Button>
						)}
					</div>
					<div className="flex gap-1 items-center">
						{[1, 2, 3, 4, 5].map((star) => {
							return (
								<AiFillStar
									color={course?.star || 0 >= star ? "orange" : "gray"}
									key={star}
								/>
							);
						})}

						<span className="text-[#909599] font-light text-xs">
							({course?.enrollment})
						</span>
					</div>
				</div>
				<div className="flex gap-3 flex-col mt-1">
					<h2 className="uppercase text-xl">{course?.course_name}</h2>
					<p className="text-[#828282]">{course?.description}</p>
					<div className="flex gap-1 items-center ">
						<BsPeople size={18} />
						<p>{course?.enrollment} học viên đã ghi danh</p>
					</div>
					<div className="flex gap-1 items-center">
						<AiOutlineClockCircle size={18} />
						<p>{converDateTime(course?.createdAt?.toString())}</p>
					</div>
					<div className="flex gap-2 items-center">
						<p className="text-xl text-[#FF852D]">
							{course?.course_fee.toLocaleString("en")} ₫
						</p>
						<p className="text-base line-through">
							{" "}
							{(Number(course?.course_fee) + 100000).toLocaleString("en")} ₫
						</p>
					</div>
					<Link
						href={`/course/${courseId}`}
						className=" btn  cursor-pointerflex items-center justify-center !bg-[#0066FF]"
					>
						<div className="flex items-center not-italic text-base gap-2">
							<BsCart3 size={18} />
							ĐĂNG KÝ NGAY
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ActiveCourse;
