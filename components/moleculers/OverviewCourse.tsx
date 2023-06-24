import React, { useEffect, useState } from "react";
import { ImageOptimizing } from "../atoms";
import { BiCategory } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import clsx from "clsx";
import { ICourse } from "@/types/course";
import { getCourse } from "apis/course";
import { extractLastName } from "@/utils/string";
import Link from "next/link";
import { ImageComponent } from "../organisms";
interface CourseProps {
  fitWidth?: boolean;
  courseId?: string;
  onClick?: (e: any) => void;
}
const OverviewCourse: React.FC<CourseProps> = ({
  fitWidth,
  courseId,
  onClick,
}) => {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  useEffect(() => {
    if (!courseId) return;
    getCourse(courseId)
      .then((success) => setCourse(success.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex items-center w-full p-4 rounded-lg border bg-white hover:shadow-xl"
      )}
    >
      <div className="min-w-[80px] w-[80px] h-[80px] rounded-2xl overflow-hidden">
        <ImageOptimizing
          blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
          src={`${process.env.BACKEND}${course?.course_img}`}
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h2 className="uppercase font-normal">{course?.course_name}</h2>
        <p className="text-xs text-[#b8b8b8]">{course?.description}</p>
      </div>
    </div>
  );
};

export default OverviewCourse;
