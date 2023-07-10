import { ICourse } from "@/types/course";
import React from "react";
import { ImageOptimizing } from "../atoms";
import Link from "next/link";
import clsx from "clsx";
import {BiCategory} from "react-icons/bi";

type Props = {
  course: ICourse;
};

const MyCourse = (props: Props) => {
  const { course } = props;
  return (
    <div className="flex flex-col px-12 py-5 rounded-2xl bg-white gap-4 shadow-xl items-center overflow-hidden">
        <ImageOptimizing
        containerClassName="h-[10rem] w-[16rem]"
        className=" rounded-xl !w-[17rem] !h-[11rem] overflow-hidden"
        blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
        src={`${process.env.BACKEND}public/course/${course._id}/course_img.jpeg`}
      />
      <p className="text-base font-semibold text-black h-[6rem] truncate w-[17rem] shrink-0 whitespace-normal">
        {course.course_name}
      </p>
      <Link
        href={`/course/${course._id}`}
        className="flex justify-center items-center rounded-lg border-[1px] border-blue-secondary text-blue-secondary text-xl font-semibold px-9 py-2 truncate"
      >
        Chi tiết
      </Link>
    </div>
  );
};

export default MyCourse;
