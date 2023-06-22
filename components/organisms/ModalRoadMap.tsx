import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Course } from "../moleculers";
import { GrClose } from "react-icons/gr";
import { getCoursesSimilarTag } from "apis/roadmap";
import { ELevel, ICourse } from "@/types/course";
import { ICourseSimilar } from "apis/roadmap/types";

interface ModalSurveyProps {
  onClose: () => void;
  detailId: string;
}
const ModalSurvey: React.FC<ModalSurveyProps> = ({ onClose, detailId }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState<ICourseSimilar[]>([]);
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) bodyElement.classList.add("!overflow-hidden", "relative");

    return () => {
      if (bodyElement) bodyElement.classList.remove("!overflow-hidden");
    };
  }, []);
  const [filterLevel, setFilterLevel] = useState(ELevel.ALL_LEVELS);
  useEffect(() => {
    getCoursesSimilarTag(detailId)
      .then((success) => setList(success.data))
      .catch((error) => console.log(error));
  }, [detailId]);

  return (
    <div className="bg-[#50505072] fixed top-0 bottom-0 z-50 h-screen w-screen flex items-center justify-center">
      <div
        className={
          "w-2/3 h-4/5 bg-white flex flex-col overflow-hidden rounded-lg p-2"
        }
      >
        <div className="flex items-center justify-between gap-2 p-8">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-2xl">Basic Operations</h2>
            <span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10.5" cy="10.5" r="10.5" fill="#B4DFFF" />
                <g clip-path="url(#clip0_442_2258)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.8125 8H7.0625C7.58 8 8 8.42 8 8.9375V15.1875C8 15.705 7.58 16.125 7.0625 16.125H5.8125C5.295 16.125 4.875 15.705 4.875 15.1875V8.9375C4.875 8.42 5.295 8 5.8125 8Z"
                    fill="#2F80ED"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2144 16.1251H9.25C8.55937 16.1251 8 15.5657 8 14.8751V8.7201C8 8.25698 8.17125 7.8101 8.48125 7.46573L10.0156 5.76135L10.2525 4.3351C10.3594 3.6926 11.1244 3.41948 11.6219 3.8401C12.025 4.18073 12.375 4.68635 12.375 5.4151C12.375 6.51885 11.75 8.0001 11.75 8.0001H14.875C15.9106 8.0001 16.75 8.83948 16.75 9.8751V10.7076C16.75 10.9826 16.6894 11.2545 16.5725 11.5032L14.9119 15.0457C14.6031 15.7045 13.9419 16.1251 13.2144 16.1251Z"
                    fill="#2F80ED"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_442_2258">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(3 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer"
            onClick={onClose}
          >
            <GrClose size={20} />
          </motion.div>
        </div>

        <div className="flex w-full">
          {Object.keys(ELevel)
            .filter((x) => Number.isNaN(Number(x)) && x !== "NONE")
            .map((key) => {
              return (
                <p
                  className={clsx(
                    "flex-1 p-4 flex items-center justify-center bg-[#F3F3F3] text-[#C0C0C0] text-sm border-b-2 overflow-hidden cursor-pointer",
                    {
                      "!bg-white !text-[#3D5AF1] font-bold !text-base border-2 rounded-t-lg border-b-transparent -mt-4 transition-all":
                        filterLevel === ELevel[key as keyof typeof ELevel],
                    }
                  )}
                  key={key}
                  onClick={() =>
                    setFilterLevel(ELevel[key as keyof typeof ELevel])
                  }
                >
                  {key}
                </p>
              );
            })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="flex-1 h-full py-8 px-12 border-2 border-t-transparent rounded-b-lg"
            key={filterLevel}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between overflow-x-auto w-full gap-4 py-5">
              {list
                .filter(
                  (x) =>
                    filterLevel === ELevel.ALL_LEVELS ||
                    x.course_level === filterLevel
                )
                .map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * index,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Course key={item._id} fitWidth courseId={item._id} />
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ModalSurvey;
