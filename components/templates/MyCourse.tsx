import { avatar, background } from "@/assets/mycourse";
import { IUser } from "@/types/auth";
import { ICourse } from "@/types/course";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../atoms";
import { ITag } from "@/types/tag";
import { MyCourseItem } from "../moleculers";
type Props = {
  data: { courses: ICourse[]; user: IUser; tags: ITag[] } | undefined;
};

const MyCourse = (props: Props) => {
  const { data } = props;
  return (
    <div className="p-4 bg-white w-full flex flex-col items-center">
      {/* nav */}
      <div
        className="p-4 rounded-2xl flex gap-8 max-h-[30rem] w-full justify-between"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image
          src={avatar.src}
          width={500}
          height={500}
          alt="avatar"
          className="rounded-full border-8 border-white w-[15rem] h-[15rem]"
        ></Image>
        <div className=" rounded-2xl relative flex-1 overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-80"></div>
          <div className="absolute inset-0 p-8 flex flex-col w-full gap-4">
            <div className=" items-stretch flex gap-3 justify-between">
              <h1 className="text-2xl text-black">{data?.user.fullname}</h1>
              <Button className="!bg-blue-secondary">Edit Profile</Button>
            </div>
            <h5>Assistant Professor at Mcmaster University</h5>
            <p className=" font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum
              ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="">
        {/* tag */}
        <div className="flex items-start gap-5">
          {data?.tags.map((tag) => {
            return (
              <Button className="!bg-blue-secondary" key={tag._id}>
                {tag.tag_name}
              </Button>
            );
          })}
        </div>

        {/* course */}
        <div className="flex gap-7 flex-wrap">
          {data?.courses.map((course) => {
            return (
              <MyCourseItem key={course._id} course={course}></MyCourseItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
