import AxiosServices from "apis/axiosServices";
import { ICourseSimilar, IRoadmap } from "./types";
import { ELevel, ICourse } from "@/types/course";

export const myRoadmap = () => {
  return new AxiosServices().get<IRoadmap>(`roadmap/my_roadmap`);
};

export const getCoursesSimilarTag = (detailId: string) => {
  return new AxiosServices().get<ICourseSimilar[]>(
    `roadmap/courses_similar_tag?detail_id=${detailId}`
  );
};
