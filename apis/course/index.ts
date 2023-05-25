import { ICourse } from "~/types/course";
import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import { IFormik } from "~/pages/courses/Add";

export const all = () => {
  return new AxiosServices().get<IResult<ICourse[]>>("admin/courses/main/all");
};

export const add = (data: IFormik) => {
  const form = new FormData();
  form.append("CourseTypeID", data.courseTypeID?.toString()!);
  form.append("CourseName", data.courseName!);
  form.append("CourseFee", data.courseFee?.toLocaleString()!);
  form.append("Description", data.description!);
  form.append("CourseState", data.courseState!.toString());
  form.append("Commission", data.commission!.toString());
  form.append("Image", data.image!);
  return new AxiosServices().post<ICourse>("admin/courses/main/create", add, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const remove = (id: number) => {
  return new AxiosServices().delete<ICourse>(
    `admin/courses/main/delete/${id}`
  );
};