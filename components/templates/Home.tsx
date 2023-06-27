import { StateHome } from "@/pages/index";
import { UserReduxProps } from "@/redux/features/slices/user";
import { ICourseMix } from "@/types/IType";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { BsCart3, BsPeople } from "react-icons/bs";
import { Button, ImageOptimizing, TextFieldSearch } from "../atoms";
import { ImageComponent, ModalSurvey } from "../organisms";
import { converDateTime } from "@/utils/index";
import { BotIcon } from "@/assets/home/index";
import { useRouter } from "next/router";
import Link from "next/link";
import { ActiveCourse, OverviewCourse } from "../moleculers";

interface HomeProps {
  courses: string[];
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
      </div>
      <div className="px-[10%] pb-48">
        {user?.token && (
          <div>
            <div className="py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">DÀNH CHO BẠN</h2>
                <Link
                  href="/course"
                  className="h-10 uppercase px-8 border-[1.5px] btn !border-[#0066FF] !text-[#0066FF] !bg-white"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[90vh]">
              <Link
                href="/roadmap"
                className="col-span-2 rounded-xl overflow-hidden p-6 bg-[url('/home_a.png')] bg-cover bg-no-repeat"
              >
                <div>
                  <h2 className="uppercase font-medium">lộ trình của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
                </div>
              </Link>
              <Link
                href="/mycourse"
                className="row-span-2 col-start-3 rounded-xl overflow-hidden p-6 bg-[url('/home_b.png')] bg-cover bg-no-repeat"
              >
                <div>
                  <h2 className="uppercase font-medium">khoá học của bạn</h2>
                  <p className="text-sm text-[#4F4F4F]">12 bài học</p>
                </div>
              </Link>
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
              <Link
                href="/course"
                className="h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF] btn !bg-white"
              >
                Xem tất cả
              </Link>
            </div>
          </div>
          <Controller
            name="activeCourse"
            defaultValue={undefined}
            control={stateStore.control}
            render={({ field: { value: activeCourse, onChange } }) => (
              <div className="h-[90vh] flex w-full rounded-lg overflow-hidden">
                <div className="flex-[1.5] flex flex-col h-full overflow-y-auto bg-gray-50 gap-1 p-2 ">
                  {courses.map((item) => (
                    <OverviewCourse
                      key={item}
                      courseId={item}
                      onClick={() => onChange(item)}
                    ></OverviewCourse>
                  ))}
                </div>
                <Controller
                  control={stateStore.control}
                  name="activeCourse"
                  render={({ field: { value: courseId } }) => {
                    return (
                      <ActiveCourse
                        courseId={courseId || courses.at(0)}
                      ></ActiveCourse>
                    );
                  }}
                ></Controller>
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
