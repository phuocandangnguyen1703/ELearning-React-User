import { StateStoreType } from "@/pages/roadmap";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ProgressLayout } from "../atoms";
import { MapItem } from "../moleculers";
import { ModalRechoose, ModalRoadMap } from "../organisms";
import { IDetail, IRoadmap } from "apis/roadmap/types";
import _ from "lodash";
import { EditIcon } from "@/assets/roadmap";

const circumference = 60 * 2 * Math.PI;
interface RoadMapProps {
  stateStore: UseFormReturn<StateStoreType, any>;
  roadmap: IRoadmap | undefined;
  handleReload: () => void;
}
const RoadMap: React.FC<RoadMapProps> = ({
  roadmap,
  stateStore,
  handleReload,
}) => {
  const percent = roadmap?.percent || 0;
  return (
    <div className="bg-white">
      <Controller
        name="isOpenModal"
        control={stateStore.control}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              {value && (
                <ModalRoadMap onClose={() => onChange(false)} detail={value} />
              )}
            </>
          );
        }}
      />

      <Controller
        control={stateStore.control}
        name="isOpenRechoose"
        render={({ field: { value: isOpenRechoose, onChange } }) => {
          if (!isOpenRechoose) return <></>;
          return (
            <ModalRechoose
              setOpen={(e) => onChange(e)}
              handleReload={handleReload}
            ></ModalRechoose>
          );
        }}
      ></Controller>

      {/* <div className="bg-[url('/bg_skill.png')] h-screen w-full right-0 bg-no-repeat absolute z-10 top-0 bg-right-top blur-lg">
        C
      </div> */}
      {/* <div className="bg-[url('/bg_skill_2.png')] h-screen w-full right-0 bg-no-repeat absolute z-10 top-0 bg-left-top blur-lg"></div> */}
      <div className="h-[50vh] w-2/3 m-auto p-14 flex gap-10">
        <div className="flex flex-1 flex-col gap-3">
          <h2>Chào mừng quay lại với lộ trình trở thành</h2>
          <h1 className="font-bold text-3xl text-[#5F6368]">
            {roadmap?.maintype_name}
          </h1>
          <i
            className=" text-blue-secondary flex items-center cursor-pointer"
            onClick={() => stateStore.setValue("isOpenRechoose", true)}
          >
            <EditIcon></EditIcon>
            <span className="ml-1">Đổi lộ trình khác</span>
          </i>
        </div>
        <div className="flex-1 flex flex-col relative">
          <h2 className="text-[#595959] font-bold text-lg ml-10">
            Tiến độ hoàn thành
          </h2>
          <div className="w-[200px] overflow-hidden">
            <div className="w-[400px] h-[220px] absolute top-[20px] left-0">
              <ProgressLayout />
              <div className="absolute top-[37px] left-[67px]">
                <svg className="w-[162px] h-[162px]">
                  <circle
                    className="text-white"
                    strokeWidth={30}
                    stroke="currentColor"
                    fill="transparent"
                    r={60}
                    cx={80}
                    cy={80}
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth={30}
                    strokeDasharray={
                      circumference - (percent / 100) * circumference
                    }
                    strokeDashoffset={
                      circumference - (percent / 100) * circumference
                    }
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={60}
                    cx={80}
                    cy={80}
                  />
                </svg>
              </div>
              <p className="absolute text-lg text-gray-500 font-bold top-[108px] left-[126px]">
                {percent}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto relative mt-28 grid grid-cols-2 pb-20 z-20">
        {roadmap?.sections.map((item, index) => (
          <MapItem
            onTap={(detailF: IDetail) =>
              _.throttle(
                () => stateStore.setValue("isOpenModal", detailF),
                1000
              )()
            }
            numStep={index + 1}
            key={item.section_id}
            details={item.details}
            section_name={item.section_name}
            odd={(index + 1) % 2 == 0}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
