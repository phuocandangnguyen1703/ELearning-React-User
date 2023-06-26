import React, { useCallback, useEffect, useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Button, Select, TextField, useLoading } from "../atoms";
import { OptionType } from "@/types/common";
import { Course, Pagination } from "../moleculers";
import { StateStoreType } from "@/pages/course";
import { allCourses } from "@/apis/course";
import Link from "next/link";
import _ from "lodash";
import { searchCourses } from "@/apis/search";
interface CoursesProps {
  stateStore: UseFormReturn<StateStoreType, any>;
}
const AllCourses: React.FC<CoursesProps> = ({ stateStore }) => {
  const loading = useLoading();
  useEffect(() => {
    (async () => {
      loading.open();
      await searchCourses({})
        .then((success) =>
          stateStore.setValue(
            "courses",
            success.data.map((x) => x._id)
          )
        )
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, []);
  const handleSearch = useCallback(() => {
    _.throttle(() => {
      const search = stateStore.getValues("search");
      searchCourses({ search: search })
        .then((success) =>
          stateStore.setValue(
            "courses",
            success.data.map((x) => x._id)
          )
        )
        .catch((error) => console.log(error));
    }, 300)();
  }, []);
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="w-full h-44 flex items-center justify-center bg-[url('/bg-all-courses.png')] bg-cover flex-col gap-2">
        <div className="bg-white rounded-lg flex items-center justify-center h-12 w-2/3 p-4">
          <Controller
            name="search"
            control={stateStore.control}
            render={({ field }) => (
              <TextField
                {...field}
                className="flex-1 !border-none !h-full outline-none"
                placeholder="Search your favourite course"
              />
            )}
          />

          <Button className="flex items-center justify-center !bg-[#0066FF]">
            Search
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Controller
            name="type"
            control={stateStore.control}
            render={({ field }) => (
              <Select placeHolder="Type" options={[]} {...field} />
            )}
          />
          <Controller
            name="type"
            control={stateStore.control}
            render={({ field }) => (
              <Select
                placeHolder="Author"
                options={[]}
                {...field}
                isClearable
              />
            )}
          />
          <Controller
            name="type"
            control={stateStore.control}
            render={({ field }) => (
              <Select
                placeHolder="Price"
                options={[{ label: "a", value: "" }]}
                {...field}
              />
            )}
          />
          <Controller
            name="type"
            control={stateStore.control}
            render={({ field }) => (
              <Select placeHolder="Language" options={[]} {...field} />
            )}
          />
          <Controller
            name="type"
            control={stateStore.control}
            render={({ field }) => (
              <Select placeHolder="Level" options={[]} {...field} />
            )}
          />
        </div>
      </div>
      <div className="max-w-full min-w-[70%] mt-10 flex flex-col items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 content-center">
          <Controller
            control={stateStore.control}
            name="courses"
            render={({ field: { value: courses } }) => (
              <>
                {courses.map((course) => (
                  <Course key={course} fitWidth courseId={course} />
                ))}
              </>
            )}
          ></Controller>
        </div>
        <div className="mt-5">
          <Pagination onChange={(e) => 1} pageSize={5} currentPage={3} />
        </div>

        {/* <div className="max-w-full min-w-[70%] flex flex-col items-center py-4 mt-6">
          <div className="w-full flex justify-between">
            <h2 className="uppercase text-xl font-medium">KHóa học phổ biến</h2>
            <Link
              href="/course"
              className=" btn !bg-white h-10 uppercase px-8 !border-[#0066FF] !text-[#0066FF]"
            >
              Xem tất cả
            </Link>
          </div>
          <div className=" overflow-x-auto max-w-full min-w-[70%] mt-10 items-center grid grid-cols-4 grid-rows-1 gap-4 content-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Course key={item} fitWidth />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AllCourses;
