import { ICourse } from "@/types/course";
import AxiosServices from "apis/axiosServices";

export const getCourse = (courseId: string) => {
  return new AxiosServices().get<ICourse>(`course/item/${courseId}`);
};

export const getCoursesOfMaintype = (courseId: string) => {
  return new AxiosServices().get<{ _id: string }[]>(
    `course/courses_of_maintype?course_id=${courseId}`
  );
};

export const allCourses = () => {
  return new AxiosServices().get<{ _id: string }[]>(`course/all_courses`);
};
