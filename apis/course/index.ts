import { ICourse } from "@/types/course";
import AxiosServices from "apis/axiosServices";

export const getCourse = (courseId: string) => {
  return new AxiosServices().get<ICourse>(`course/item/${courseId}`);
};

export const getCoursesOfMaintype = (
  courseId: string,
  take?: number,
  random?: boolean
) => {
  return new AxiosServices().get<{ _id: string }[]>(
    `course/courses_of_maintype?course_id=${courseId}&take=${take}&random=${random}`
  );
};

export const allCourses = () => {
  return new AxiosServices().get<{ _id: string }[]>(`course/all_courses`);
};
export const randomCourses = () => {
  return new AxiosServices().get<{ _id: string }[]>("course/random_courses");
};
