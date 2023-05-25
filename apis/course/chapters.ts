import { IChapter } from "~/types/course";
import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import { IFormik } from "~/pages/chapters/Add";

export const all = () => {
  return new AxiosServices().get<IResult<IChapter[]>>(
    "admin/courses/chapters/all"
  );
};

export const add = (data: IFormik) => {
  return new AxiosServices().post<IChapter>("admin/courses/chapters/create", {
    CourseID: data.courseID,
    ChapterName: data.chapterName
  });
};

export const remove = (id: number) => {
  return new AxiosServices().delete<IChapter>(
    `admin/courses/chapters/delete/${id}`
  );
};
