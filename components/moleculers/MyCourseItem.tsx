import { ICourse } from "@/types/course";
import React from "react";
import { ImageOptimizing } from "../atoms";
import Link from "next/link";

type Props = {
  course: ICourse;
};

const MyCourse = (props: Props) => {
  const { course } = props;
  return (
    <div className=" flex flex-col px-5 py-7 rounded-2xl bg-white gap-4 shadow-xl items-center">
      <ImageOptimizing
        containerClassName="h-[10rem] w-[16rem]"
        className=" rounded-xl !w-[17rem] !h-[11rem] overflow-hidden"
        blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
        src={`${process.env.BACKEND}public/course/${course._id}/course_img.jpeg`}
      />
      <h3 className="text-2xl text-black font-normal h-[6rem] truncate">
        {course.course_name}
      </h3>
      <Link
        href={`/course/${course._id}`}
        className="flex justify-center items-center rounded-lg border-[1px] border-blue-secondary text-blue-secondary text-xl font-semibold px-9 py-2"
      >
        Chi tiết
      </Link>
    </div>
  );
};

export default MyCourse;
