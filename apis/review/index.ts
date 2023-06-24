import { IReview } from "@/types/review";
import AxiosServices from "apis/axiosServices";
import { ICourseReview } from "./types";

export const postReview = (data: {
  courseId: string;
  courseReviewStar: number;
  content?: string;
}) => {
  return new AxiosServices().post<any>(`review/new`, data);
};

export const getCourseReview = (courseId: string) => {
  return new AxiosServices().get<ICourseReview>(
    `review/course_review/${courseId}`
  );
};
