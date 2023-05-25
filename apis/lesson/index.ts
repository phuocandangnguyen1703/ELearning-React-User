import { ILesson } from "~/types/lesson";
import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import { IFormik } from "~/pages/lessons/Add";

export const all = () => {
  return new AxiosServices().get<IResult<ILesson[]>>("admin/lessons/main/all");
};

export const add = (data: IFormik) => {
  return new AxiosServices().post<ILesson>("admin/lessons/main/create", {
    ChapterID: data.chapterID,
    LessonName: data.lessonName,
    LessonURL: data.lessonURL,
    Duration: data.duration,
  });
};

export const remove = (id: number) => {
  return new AxiosServices().delete<ILesson>(`admin/lessons/main/delete/${id}`);
};
