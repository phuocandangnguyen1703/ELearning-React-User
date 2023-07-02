import { ICourse } from "@/types/course";
import { getVideo, streamVideo } from "apis/learning";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBook, BsCalendarMinus } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";
import { Video, useLoading } from "../atoms";
import { thumbnail } from "@/assets/learning";
type Props = {
  lessonId: string;
  courseId: string;
  course: ICourse;
};
const Elearning = ({ lessonId, course, courseId }: Props) => {
  const [videoToken, setVideoToken] = useState<string | undefined>();
  const loading = useLoading();
  useEffect(() => {
    if (!lessonId) return;
    if (!courseId) return;
    (async () => {
      loading.open();
      await getVideo(lessonId, courseId)
        .then((success) => setVideoToken(success))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, [lessonId, courseId]);

  return (
    <div className="bg-[#9DCCFF] p-8 flex justify-center  h-screen items-center w-full">
      <div className="w-full m-auto h-full flex items-center justify-between gap-4">
        <div className="flex-1 h-full flex flex-col gap-2 w-full">
          <div className="flex gap-2 h-24 justify-between items-center ">
            <Link
              href={`/course/${courseId}`}
              className="w-9 h-9 bg-[#2F80ED] text-white flex items-center justify-center"
            >
              <MdOutlineArrowBack size={20} />
            </Link>
            <div className="h-fit bg-white rounded-xl p-3 flex-1">
              <div className="flex flex-col overflow-hidden truncate">
                <h1 className="text-black font-semibold text-2xl truncate">
                  {course.course_name}
                </h1>

                <div className="flex items-center gap-4 text-xs">
                  <p>{course.lesson_quantity} Lesson</p>
                  <p>{course.duration} hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden w-full">
            {videoToken && (
              <Video
                video={streamVideo(videoToken)}
                thumbnail={thumbnail.src}
              ></Video>
            )}
          </div>
        </div>
        <div className="w-[21rem] h-full flex flex-col gap-8">
          <div className="w-full h-fit max-h-screen bg-white overflow-hidden p-4 rounded-xl flex flex-col">
            <h1 className="text-black font-semibold text-xl whitespace-nowrap overflow-hidden text-ellipsis">
              {course.course_name}
            </h1>
            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-[#2F80ED]">
                  0/{course.chapters.length} COMPLETED
                </p>
                <p className="text-sm uppercase text-[#2F80ED]">
                  <BsCalendarMinus size={18} />
                </p>
              </div>
              <div className="flex gap-1">
                {course.chapters.map((chapter, index) => (
                  <span
                    key={chapter._id}
                    className={clsx("flex-1 h-1 bg-[#2F80ED]", {
                      "opacity-25": index >= 0,
                    })}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
                {course.chapters.map((chapter) => (
                  <div
                    key={chapter._id}
                    className="h-fit p-2 px-4 border rounded-xl"
                  >
                    <div
                      data-te-collapse-init
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      data-te-target={`#collapse${chapter._id}`}
                      aria-expanded="false"
                      aria-controls="collapse"
                      className="flex flex-col gap-2 cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <p>{chapter.chapter_name}</p>
                        <span className="chev ease-linear transition-all duration-100">
                          <FiChevronDown size={20} />
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-[#252641CC]">
                          <AiOutlineClockCircle size={14} />
                          <span>{chapter.duration} Hour</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#252641CC]">
                          <BsBook size={14} />
                          <span>{chapter.lessons?.length} Lessons</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="!visible hidden divide-y-2"
                      id={`collapse${chapter._id}`}
                      data-te-collapse-item
                    >
                      {chapter.lessons?.map((lesson) => (
                        <Link
                          href={`/learning/${lesson._id}?course_id=${course._id}`}
                          key={lesson._id}
                          className="p-2 py-4 flex items-center justify-between text-sm gap-1"
                        >
                          <p className=" text-ellipsis whitespace-nowrap overflow-hidden">
                            {lesson.lesson_name}
                          </p>
                          <p className=" whitespace-nowrap">
                            {lesson.duration}h
                          </p>
                        </Link>
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
