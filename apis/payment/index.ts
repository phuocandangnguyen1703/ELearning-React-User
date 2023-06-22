import AxiosServices from "apis/axiosServices";

export const getCoursesSimilar = (courseId: string) => {
  return new AxiosServices().get<{ _id: string }[]>(
    `payment/courses_similar?course_id=${courseId}`
  );
};
