import React, { useEffect, useState } from "react";
import { ImageOptimizing } from "../atoms";
import { BiCategory } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import clsx from "clsx";
import { ICourse } from "@/types/course";
import { getCourse } from "apis/course";
import { extractLastName } from "@/utils/string";
import Link from "next/link";
interface CourseProps {
  fitWidth?: boolean;
  courseId?: string;
}
const Course: React.FC<CourseProps> = ({ fitWidth, courseId }) => {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  useEffect(() => {
    if (!courseId) return;
    getCourse(courseId)
      .then((success) => setCourse(success.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div
      className={clsx(
        "h-[360px] bg-white w-[260px] rounded-lg p-4 flex flex-col gap-1 shadow-xl",
        {
          "min-w-[260px]": fitWidth,
        }
      )}
    >
      <div className="h-[140px] rounded-lg overflow-hidden">
        <ImageOptimizing
          blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
          src={`${process.env.BACKEND}${course?.course_img}`}
        />
      </div>
      <div className="flex items-center justify-between py-2 max-w-full overflow-hidden">
        <div className="whitespace-nowrap overflow-hidden flex justify-center items-center gap-1 opacity-75">
          <BiCategory color="gray" />
          <span className="text-xs truncate">{course?.course_name}</span>
        </div>
        <div className="whitespace-nowrap shrink-0 flex justify-center items-center gap-1 opacity-75">
          <FiClock color="gray" />
          {course?.duration && (
            <span className="text-xs">
              {Math.round(course?.duration / 24)} days
            </span>
          )}
        </div>
      </div>
      <Link
        href={`/course/${courseId}`}
        className="text-base font-semibold text-black"
        style={
          {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": 2 /* number of lines to show */,
            lineHeight: "20px" /* fallback */,
            maxHeight: "40px",
          } as React.CSSProperties
        }
      >
        {course?.course_name}
      </Link>
      <p
        className="line-clamp-2 text-sm opacity-70 flex-1"
        style={
          {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": 2 /* number of lines to show */,
            lineHeight: "20px" /* fallback */,
            maxHeight: "40px",
          } as React.CSSProperties
        }
      >
        {course?.description}
      </p>
      <div className="flex items-center justify-between truncate">
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
              {course?.fullname && extractLastName(course?.fullname!)}
            </h2>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          {/* <p className="line-through text-sm opacity-50"></p> */}
          <p
            className="text-lg text-[#2F80ED] font-bold truncate max-h-[]"
            style={
              {
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": 2 /* number of lines to show */,
                lineHeight: "20px" /* fallback */,
                maxHeight: "40px",
              } as React.CSSProperties
            }
          >
            {course?.course_fee.toLocaleString()} đ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
