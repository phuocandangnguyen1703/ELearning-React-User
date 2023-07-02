import { getCoursesOfMaintype } from "@/apis/course";
import { StartIcon } from "@/assets/detail";
import { RootState } from "@/redux/store";
import { ICourse } from "@/types/course";
import { calculateRelativeTime } from "@/utils/date";
import { useToast } from "@iscv/toast";
import { checkPayment } from "apis/payment";
import { getCourseReview, postReview } from "apis/review";
import { ICourseReview } from "apis/review/types";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  AiFillCamera,
  AiFillGoogleCircle,
  AiFillRedditCircle,
  AiFillStar,
  AiFillTwitterCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsBook, BsCalendarMinus } from "react-icons/bs";
import { FaCertificate, FaChartBar } from "react-icons/fa";
import { FiChevronDown, FiClock } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Button, ImageOptimizing, TextAreaField, useLoading } from "../atoms";
import { Course } from "../moleculers";
import { ImageComponent } from "../organisms";
interface DetailsProps {
  imageURL: string;
  course: ICourse | undefined;
  courseId: string | undefined;
}

type IForm = {
  isPaid: boolean;
  review: ICourseReview | undefined;
  rating: {
    isRating: boolean;
    courseReviewStar: number | undefined;
    hoveredNumber: number;
    content: string | undefined;
  };
  suggestions: string[];
};

const Details: React.FC<DetailsProps> = ({ imageURL, course, courseId }) => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.user.token);
  const loading = useLoading();
  const toast = useToast();
  const { control, setValue, getValues } = useForm<IForm>({
    defaultValues: {
      isPaid: false,
      review: undefined,
      rating: {
        isRating: false,
        hoveredNumber: 0,
      },
      suggestions: [],
    },
  });
  useEffect(() => {
    if (!courseId) return;
    if (!token) return;

    (async () => {
      loading.open();
      await checkPayment(courseId as string)
        .then((success) => setValue("isPaid", success.data.is_paid))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, [courseId, token]);
  const handleReview = useCallback(async () => {
    const rating = getValues("rating");
    if (!rating.courseReviewStar) {
      toast.warning("Vui lòng chọn số sao");
      return;
    }
    loading.open();
    if (!courseId) {
      toast.warning("Không tìm thấy mã khóa học");
      return;
    }
    await postReview({
      courseId: courseId,
      courseReviewStar: rating.courseReviewStar,
      content: rating.content,
    })
      .then(() => {
        toast.success("Đánh giá thành công");
        setValue("rating.isRating", false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data === "you had review once") {
          toast.warning("Bạn đã đánh giá một lần");
          return;
        }
        toast.error("Đánh giá thất bại");
      });
    loading.close();
  }, [courseId, token]);

  useEffect(() => {
    if (!courseId) return;
    (async () => {
      loading.open();
      await getCourseReview(courseId)
        .then((success) => setValue("review", success.data))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, [courseId]);
  useEffect(() => {
    if (!courseId) return;
    (async () => {
      loading.open();
      await getCoursesOfMaintype(courseId, 8, true)
        .then((success) =>
          setValue(
            "suggestions",
            success.data.map((x) => x._id)
          )
        )
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, [courseId]);
  return (
    <main className="bg-white">
      <Controller
        control={control}
        name="rating.isRating"
        render={({ field: { value: isRating } }) => {
          if (!isRating) return <></>;
          return (
            <div className="fixed z-[1000] inset-0">
              <div
                className="fixed bg-gray-400 opacity-50 inset-0 z-[1002]"
                onClick={() => setValue("rating.isRating", false)}
              />
              <div className=" transform-gpu fixed z-[1003] top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-2xl w-[22rem] min-h-[20rem] flex flex-col gap-3 px-8 py-6">
                <div className="flex flex-col gap-2 mb-2">
                  <h3 className="font-medium text-sm text-gray-900">
                    Bạn đánh giá khoá học này thế nào?
                  </h3>
                  <Controller
                    control={control}
                    name="rating.courseReviewStar"
                    render={({
                      field: {
                        value: courseReviewStar,
                        onChange: onCourseReviewStarChange,
                      },
                    }) => {
                      return (
                        <div className="flex items-center justify-between gap-2">
                          <Controller
                            control={control}
                            name="rating.hoveredNumber"
                            render={({
                              field: { value: hoveredNumber, onChange },
                            }) => (
                              <>
                                {[1, 2, 3, 4, 5].map((star, index) => {
                                  return (
                                    <StartIcon
                                      key={star}
                                      className={clsx(
                                        {
                                          "!fill-orange-400":
                                            hoveredNumber === 0
                                              ? star <= (courseReviewStar || 0)
                                              : star <= hoveredNumber,
                                        },
                                        "fill-gray-300 cursor-pointer h-10"
                                      )}
                                      onClick={() =>
                                        onCourseReviewStarChange(star)
                                      }
                                      onMouseEnter={() => onChange(star)}
                                      onMouseLeave={() => onChange(0)}
                                    />
                                  );
                                })}
                              </>
                            )}
                          />
                        </div>
                      );
                    }}
                  />
                </div>

                <Controller
                  control={control}
                  name="rating.content"
                  render={({ field: { value: content, onChange } }) => {
                    return (
                      <TextAreaField
                        title="Bình luận thêm"
                        name={"rating_comment"}
                        className="flex-1 w-full"
                        value={content}
                        onChange={onChange}
                        rows={8}
                        inputClassName="flex-1 w-full p-3 rounded-xl min-h-[7rem] border !border-gray-400 text-gray-500 text-sm font-extralight"
                        placeholder="Nhập nội dung..."
                      />
                    );
                  }}
                />
                <div className="flex justify-between items-center gap-1">
                  <Button
                    onClick={() => setValue("rating.isRating", false)}
                    className="border border-gray-500 !text-gray-500 flex-1 !bg-white text-xl font-normal flex justify-center items-end"
                  >
                    Huỷ
                  </Button>
                  <Button
                    onClick={() => handleReview()}
                    className=" !bg-blue-secondary text-white flex-1 text-xl font-normal justify-center items-end"
                  >
                    Đánh giá
                  </Button>
                </div>
              </div>
            </div>
          );
        }}
      ></Controller>

      <div className="h-[70vh] w-full relative">
        <ImageComponent urldb={imageURL} />
      </div>

      <div className="w-full h-fit bg-white flex px-28 py-16">
        <div className="flex-[2] h-full px-28 flex flex-col gap-8">
          <div className="w-full h-fit max-h-screen bg-white overflow-hidden p-4 rounded-xl flex flex-col">
            <h1 className="text-black font-semibold text-2xl">
              {course?.course_name}
            </h1>
            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase text-[#2F80ED]">
                  0/{course?.chapters.length} COMPLETED
                </p>
                <p className="text-sm uppercase text-[#2F80ED]">
                  <BsCalendarMinus size={18} />
                </p>
              </div>
              <div className="flex gap-1">
                {course?.chapters.map((chapter, index) => (
                  <span
                    key={chapter._id}
                    className={clsx("flex-1 h-1 bg-[#2F80ED]", {
                      "opacity-25": index >= 0,
                    })}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
                {course?.chapters.map((chapter, index) => (
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
                          <span>{chapter?.lessons?.length} Lessons</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="!visible hidden divide-y-2"
                      id={`collapse${chapter._id}`}
                      data-te-collapse-item
                    >
                      {chapter?.lessons?.map((lesson) => {
                        return (
                          <Link
                            href={`/learning/${lesson._id}?course_id=${course._id}`}
                            key={lesson._id}
                            className="p-2 py-4 flex items-center justify-between text-sm"
                          >
                            <p>{lesson.lesson_name}</p>
                            <p>{lesson.duration}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                className="font-semibold !bg-[#0000001A] !text-[#00000069]"
              >
                Overview
              </Button>
            ))}
          </div> */}
          <Controller
            control={control}
            name="review"
            render={({ field: { value: review } }) => {
              return (
                <div className="flex-1 w-full bg-[#9DCCFF4D] rounded-2xl p-6 overflow-hidden gap-2 flex flex-col">
                  <div className="h-40 flex gap-9">
                    <div className="w-48 h-full bg-white rounded-2xl flex flex-col justify-center items-center gap-2">
                      <h2 className="font-bold text-[#00000080] text-2xl">
                        {review?.averange?.toFixed(1)} out of 5
                      </h2>
                      <div className="flex gap-1">
                        {[
                          ...Array(
                            Number(review?.averange?.toFixed() || 0)
                          ).keys(),
                        ].map((num) => {
                          return <AiFillStar key={num} color="orange" />;
                        })}
                      </div>
                      <h2 className="font-normal text-[#00000080] text-xl">
                        Top Raiting
                      </h2>
                    </div>
                    <div className="flex-1 h-full bg-white rounded-2xl p-2 flex flex-col gap-2">
                      {[1, 2, 3, 4, 5].reverse().map((item) => (
                        <div className="flex items-center gap-2" key={item}>
                          <p className="text-[#00000080]">{item} Stars</p>
                          <div className="bg-[#D9D9D9] flex-1 h-2 rounded-3xl relative overflow-hidden">
                            <span
                              className="bg-[#2F80ED] h-2 absolute left-0 top-0 rounded-3xl"
                              style={{
                                width: `${(() => {
                                  if (!review) return 0;
                                  switch (item) {
                                    case 1:
                                      return review.oneStar;
                                    case 2:
                                      return review.twoStar;
                                    case 3:
                                      return review.threeStar;
                                    case 4:
                                      return review.fourStar;
                                    case 5:
                                      return review.fiveStar;
                                    default:
                                      return 0;
                                  }
                                })()}%`,
                              }}
                            ></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 overflow-auto h-full p-4 gap-3">
                    {review?.list?.map((item) => (
                      <div className="flex items-center">
                        <div className="flex flex-col">
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
                                {item.fullname}
                              </h2>
                              <div className="flex gap-1">
                                {[
                                  ...Array(item.course_review_star || 0).keys(),
                                ].map((num) => (
                                  <AiFillStar color="orange" key={num} />
                                ))}
                              </div>
                            </div>
                          </div>
                          {item.content && <p>{item.content}</p>}
                        </div>
                        <div className="whitespace-nowrap flex justify-center items-center gap-1 opacity-75">
                          <FiClock color="gray" />
                          <span className="text-xs">
                            {calculateRelativeTime(
                              new Date(item.createdAt!),
                              new Date()
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }}
          ></Controller>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-lg h-fit p-6 flex flex-col gap-4 -translate-y-[280px]">
          <div className="h-[180px]">
            <ImageOptimizing
              blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
              className=" rounded-xl"
              src={`${process.env.BACKEND}${course?.course_img}`}
            />
          </div>
          <div className="flex gap-4 items-center pt-2">
            <p className="text-2xl font-bold text-black">
              {course?.course_fee?.toLocaleString()} đ
            </p>
            {/* <p className="text-base font-bold text-[#00000080]">
      <div className="w-full h-fit bg-white flex px-28 py-16">
        <div className="flex-[2] h-full px-28 flex flex-col gap-8">
          <div className="w-full h-fit max-h-screen bg-white overflow-hidden p-4 rounded-xl flex flex-col">
            <h1 className="text-black font-semibold text-2xl">
              {course?.course_name}
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
                {course?.chapters.map((chapter, index) => (
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
                          <span>{chapter?.lessons?.length} Lessons</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="!visible hidden divide-y-2"
                      id={`collapse${chapter._id}`}
                      data-te-collapse-item
                    >
                      {chapter?.lessons?.map((lesson) => {
                        return (
                          <Link
                            href={`/learning/${lesson._id}?course_id=${course._id}`}
                            key={lesson._id}
                            className="p-2 py-4 flex items-center justify-between text-sm"
                          >
                            <p>{lesson.lesson_name}</p>
                            <p>{lesson.duration}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                className="font-semibold !bg-[#0000001A] !text-[#00000069]"
              >
                Overview
              </Button>
            ))}
          </div>
          <Controller
            control={control}
            name="review"
            render={({ field: { value: review } }) => {
              return (
                <div className="flex-1 w-full bg-[#9DCCFF4D] rounded-2xl p-6 overflow-hidden gap-2 flex flex-col">
                  <div className="h-40 flex gap-9">
                    <div className="w-48 h-full bg-white rounded-2xl flex flex-col justify-center items-center gap-2">
                      <h2 className="font-bold text-[#00000080] text-2xl">
                        {review?.averange?.toFixed(1)} out of 5
                      </h2>
                      <div className="flex gap-1">
                        {[
                          ...Array(
                            Number(review?.averange?.toFixed() || 0)
                          ).keys(),
                        ].map((num) => {
                          return <AiFillStar key={num} color="orange" />;
                        })}
                      </div>
                      <h2 className="font-normal text-[#00000080] text-xl">
                        Top Raiting
                      </h2>
                    </div>
                    <div className="flex-1 h-full bg-white rounded-2xl p-2 flex flex-col gap-2">
                      {[1, 2, 3, 4, 5].reverse().map((item) => (
                        <div className="flex items-center gap-2" key={item}>
                          <p className="text-[#00000080]">{item} Stars</p>
                          <div className="bg-[#D9D9D9] flex-1 h-2 rounded-3xl relative overflow-hidden">
                            <span
                              className="bg-[#2F80ED] h-2 absolute left-0 top-0 rounded-3xl"
                              style={{
                                width: `${(() => {
                                  if (!review) return 0;
                                  switch (item) {
                                    case 1:
                                      return review.oneStar;
                                    case 2:
                                      return review.twoStar;
                                    case 3:
                                      return review.threeStar;
                                    case 4:
                                      return review.fourStar;
                                    case 5:
                                      return review.fiveStar;
                                    default:
                                      return 0;
                                  }
                                })()}%`,
                              }}
                            ></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 overflow-auto h-full p-4 gap-3">
                    {review?.list?.map((item) => (
                      <div className="flex items-center">
                        <div className="flex flex-col">
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
                                {item.fullname}
                              </h2>
                              <div className="flex gap-1">
                                {[
                                  ...Array(item.course_review_star || 0).keys(),
                                ].map((num) => (
                                  <AiFillStar color="orange" key={num} />
                                ))}
                              </div>
                            </div>
                          </div>
                          {item.content && <p>{item.content}</p>}
                        </div>
                        <div className="whitespace-nowrap flex justify-center items-center gap-1 opacity-75">
                          <FiClock color="gray" />
                          <span className="text-xs">
                            {calculateRelativeTime(
                              new Date(item.createdAt!),
                              new Date()
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }}
          ></Controller>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-lg h-fit p-6 flex flex-col gap-4 -translate-y-[280px]">
          <div className="h-[180px]">
            <ImageOptimizing
              blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
              className=" rounded-xl"
              src={`${process.env.BACKEND}${course?.course_img}`}
            />
          </div>
          <div className="flex gap-4 items-center pt-2">
            <p className="text-2xl font-bold text-black">
              {course?.course_fee?.toLocaleString()} đ
            </p>
            {/* <p className="text-base font-bold text-[#00000080]">
              {course?.course_fee || 0 * 1.5} đ
            </p> */}
            <p className="text-base font-bold text-[#00000080]">50% Off</p>
          </div>
          <p className="text-[#2F80ED] text-sm font-bold text-center">
            {course?.duration} hour left at this price
          </p>

          <Controller
            control={control}
            name="isPaid"
            render={({ field: { value: isPaid } }) => {
              return (
                <Button
                  className={clsx(
                    "w-full text-base font-bold h-10 text-center flex justify-center items-center",
                    {
                      "!bg-[#2F80ED]": !isPaid,
                      "!bg-green-600": isPaid,
                    }
                  )}
                  onClick={() => {
                    if (isPaid) {
                      setValue("rating.isRating", true);
                      return;
                    }
                    router.push(`/payment?course_id=${course?._id}`);
                  }}
                >
                  {!isPaid && "Buy Now"}
                  {isPaid && "Đánh giá ngay"}
                </Button>
              );
            }}
          ></Controller>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              {course?.tag_id && (
                <span className="bg-blue-500 rounded-full h-fit w-fit px-4 text-xs py-[1px] text-white">
                  {course.tag_name}
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold text-black">
              {course?.course_name}
            </h2>
            <div className="flex gap-2 items-center">
              <FaCertificate size={24} color="#2F80ED" />
              <p className="text-sm font-bold text-[#00000080]">
                Money Back Guarantee
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <AiFillCamera size={24} color="#2F80ED" />
              <p className="text-sm font-bold text-[#00000080]">
                Access on all devices
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <HiDocumentText size={24} color="#2F80ED" />
              <p className="text-sm font-bold text-[#00000080]">
                Certification of completion
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaChartBar size={20} color="#2F80ED" />
              <p className="text-sm font-bold text-[#00000080]">32 Moduls</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-black"></div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-black">
              Training 5 or more people
            </h2>
            <p className="text-[#696984] text-sm">{course?.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-black">Share this course</h2>
            <div className="flex items-center gap-2">
              <AiFillTwitterCircle size={18} />
              <AiFillGoogleCircle size={18} />
              <AiFillRedditCircle size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[80vh] p-20 flex flex-col gap-2 bg-[#9DCCFF] mix-blend-normal bg-opacity-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Marketing Articles</h2>

          <Link
            className="uppercase border-[1.5px] border-gray-400 btn !bg-white text-gray-500"
            href={"/course"}
          >
            Xem tất cả
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Controller
            control={control}
            name="suggestions"
            render={({ field: { value: suggestions } }) => {
              return (
                <>
                  {suggestions.map((suggestion) => {
                    return <Course key={suggestion} courseId={suggestion} />;
                  })}
                </>
              );
            }}
          ></Controller>
        </div>
      </div>
      {/* <div className="h-fit w-full p-10">
				<div className="flex p-12 gap-6 h-[60vh] items-center">
					<div className="flex flex-col gap-3 flex-1">
						<h2 className="text-3xl font-semibold text-gray-900">
							Everything you can do in a physical classroom, you can do with
							TOTC
						</h2>
						<p className="text-[#696984] text-base">
							TOTC’s school management software helps traditional and online
							schools manage scheduling, attendance, payments and virtual
							classrooms all in one secure cloud-based system.
						</p>
						<p className="underline">Learn more</p>
					</div>
					<div className="h-full flex-1 rounded-lg overflow-hidden">
						<ImageOptimizing
							blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
							src="/banner_details.png"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-start">
						<h2 className="text-xl font-bold text-black">
							Top Education offers and deals are listed here
						</h2>
					</div>
					<div className="flex justify-between flex-wrap">
						{[1, 2, 3, 4, 5].map((item) => (
							<div
								key={item}
								className="h-[260px] bg-white w-[260px]
						rounded-lg flex flex-col gap-1 shadow-md relative p-4"
							>
								<div className="h-full w-full rounded-lg overflow-hidden absolute top-0 left-0 z-1 opacity-80">
									<ImageOptimizing
										blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
										src="/banner_details.png"
									/>
								</div>
								<div className="relative z-2 flex flex-col gap-4">
									<div className="relative z-2">
										<p className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500 text-white font-bold text-base text-center ">
											50%
										</p>
									</div>
									<div className="flex flex-col gap-2 font-semibold">
										<h2>FOR INSTRUCTORS</h2>
										<p>
											TOTC’s school management software helps traditional and
											online schools manage scheduling,
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div> */}
    </main>
  );
};

export default Details;
