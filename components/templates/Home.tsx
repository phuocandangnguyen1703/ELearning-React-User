import { StateHome } from "@/pages/index";
import { UserReduxProps } from "@/redux/features/slices/user";
import { ICourseMix } from "@/types/IType";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { BsCart3, BsPeople } from "react-icons/bs";
import { Button, TextFieldSearch } from "../atoms";
import { ImageComponent, ModalSurvey } from "../organisms";
import { converDateTime } from "@/utils/index";
import { BotIcon } from "@/assets/home/index";
import { useRouter } from "next/router";

interface HomeProps {
  courses: Array<ICourseMix>;
  stateStore: UseFormReturn<StateHome, any>;
  user?: UserReduxProps;
}

const Home: React.FC<HomeProps> = ({ courses, stateStore, user }) => {
  const router = useRouter();

  return (
    <div>
      <ModalSurvey></ModalSurvey>

      <div className="h-[90vh] bg-[url('/banner_home.png')] bg-no-repeat bg-cover flex p-32 items-center">
        <div className="flex-1 flex pr-10">
          <div className="w-4/5 flex flex-col gap-2">
            <h1 className="uppercase text-4xl font-semibold">
              EDUPATH TIÊN PHONG LỘ TRÌNH HỌC IT
            </h1>
            <p className="text-sm text-[#4F4F4F]">
              Chúng tôi cung cấp lộ trình học tập được cá nhân hoá theo khả năng
              của mỗi học viên
            </p>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-end">
          <div className="bg-white shadow-lg rounded-lg p-8 w-[400px] min-h-[230px] flex gap-[20px] flex-col justify-between relative">
            <div className="flex gap-8 items-center">
              <BotIcon className="w-[95px] h-[95px] object-contain"></BotIcon>
              <i className="flex-1 leading-[30px] text-[22px] font-bold text-blue-secondary">
                Xin chào, mình là Usagi
              </i>
            </div>
            <p className="text-sm text-[#3C4043]">
              Mình có thể hỗ trợ bạn tìm kiếm các cơ hội việc làm, mức lương và
              công ty tuyển dụng,...
            </p>
            <Button
              className="!bg-blue-500 uppercase h-12 !text-base"
              onClick={() => router.push("/chatbot")}
            >
              TRÒ CHUYỆN NGAY
            </Button>
          </div>
        </div>
        r
      </div>
      <div className="px-[10%] pb-48">
        {user?.token && (
          <div>
            <div className="py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">DÀNH CHO BẠN</h2>
                <Button
                  className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
                  outline
                >
                  Xem tất cả
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[90vh]">
              <div className="col-span-2 rounded-xl overflow-hidden p-6 bg-[url('/home_a.png')] bg-cover bg-no-repeat">
                <div>
                  <h2 className="uppercase font-medium">lộ trình của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
                </div>
              </div>
              <div className="row-span-2 col-start-3 rounded-xl overflow-hidden p-6 bg-[url('/home_b.png')] bg-cover bg-no-repeat">
                <div>
                  <h2 className="uppercase font-medium">lộ trình của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
                </div>
              </div>
              <div className="row-start-2  rounded-xl overflow-hidden p-6 bg-[url('/home_c.png')] bg-cover bg-no-repeat">
                <div>
                  <h2 className="uppercase font-medium">lộ trình của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
                </div>
              </div>
              <div className="row-start-2  rounded-xl overflow-hidden p-6 bg-[url('/home_d.png')] bg-cover bg-no-repeat">
                <div>
                  <h2 className="uppercase font-medium">lộ trình của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="py-4">
            <div className="flex justify-between items-center overflow-auto">
              <h2 className="uppercase text-xl font-medium">
                KHóa học phổ biến
              </h2>
              <Button
                className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
                outline
              >
                Xem tất cả
              </Button>
            </div>
          </div>
          <Controller
            name="activeCourse"
            defaultValue={null}
            control={stateStore.control}
            render={({ field: { value: activeCourse, onChange } }) => (
              <div className="h-[90vh] flex w-full rounded-lg overflow-hidden">
                <div className="flex-[1.5] flex flex-col h-full overflow-y-auto bg-gray-50 gap-1 p-2 ">
                  {courses.map((item) => (
                    <div
                      onClick={() => onChange(item)}
                      className={clsx(
                        "flex items-center w-full p-4 rounded-lg border",
                        {
                          "bg-white shadow-xl": activeCourse?.id === item.id,
                        }
                      )}
                    >
                      <div className="min-w-[80px] w-[80px] h-[80px] rounded-2xl overflow-hidden">
                        <ImageComponent urldb={item.courseImage} />
                      </div>
                      <div className="flex flex-col flex-1 p-4">
                        <h2 className="uppercase font-normal">
                          {item.courseName}
                        </h2>
                        <p className="text-xs text-[#b8b8b8]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-[2] h-full overflow-auto ">
                  <div className="h-[45%] w-full">
                    <ImageComponent urldb={activeCourse?.courseImage} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {activeCourse?.tags?.split(",")?.map((tag) => (
                          <Button
                            key={tag}
                            className="!bg-[#ECF0FF] !text-[#0066FF]"
                          >
                            {tag}
                          </Button>
                        ))}
                      </div>
                      <div className="flex gap-1 items-center">
                        {activeCourse?.reviewStar ? (
                          activeCourse.reviewStar > 0 ? (
                            <>
                              {Array(activeCourse.reviewStar)
                                .fill(null)
                                .map((_, index) => (
                                  <AiFillStar color="orange" key={index} />
                                ))}
                            </>
                          ) : (
                            <>
                              <p>No Rank</p>
                            </>
                          )
                        ) : null}

                        <span className="text-[#909599] font-light text-xs">
                          ({activeCourse?.enrollmentCount})
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-col mt-2">
                      <h2 className="uppercase text-xl">
                        {activeCourse?.courseName}
                      </h2>
                      <p className="text-[#828282]">
                        {activeCourse?.description}
                      </p>
                      <div className="flex gap-1 items-center ">
                        <BsPeople size={18} />
                        <p>
                          {activeCourse?.enrollmentCount} học viên đã ghi danh
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <AiOutlineClockCircle size={18} />
                        <p>{converDateTime(activeCourse?.create_at)}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="text-xl text-[#FF852D]">
                          {activeCourse?.courseFee.toLocaleString("en")} ₫
                        </p>
                        <p className="text-base line-through">6,590,000 ₫</p>
                      </div>
                      <Button className="flex items-center justify-center !bg-[#0066FF]">
                        <label className="flex items-center not-italic text-base gap-2">
                          <BsCart3 size={18} />
                          ĐĂNG KÝ NGAY
                        </label>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
          <div className="mt-8">
            <h2 className="uppercase text-3xl text-center text-[#000054] pb-8">
              Hơn 12.000 khóa học được tìm kiếm
            </h2>
            <div className="w-2/3 m-auto">
              <TextFieldSearch
                className="!bg-[#F8F8F8] h-12 text-black"
                placeholder="Bạn muốn học gì?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
