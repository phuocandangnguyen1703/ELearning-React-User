import { ICourse } from "@/types/course";
import { EPaymentStatus } from "@/types/payment";
import AxiosServices from "apis/axiosServices";

export const getCoursesSimilar = (courseId: string) => {
  return new AxiosServices().get<{ _id: string }[]>(
    `payment/courses_similar?course_id=${courseId}`
  );
};

export const getCoursePrice = (courseId: string) => {
  return new AxiosServices().get<ICourse>(
    `payment/course_price?course_id=${courseId}`
  );
};

export const checkPayment = (courseId: string) => {
  return new AxiosServices().get<{ payment_status: EPaymentStatus }>(
    `payment/check_payment?course_id=${courseId}`
  );
};

export const makePayment = (courseId: string) => {
  return new AxiosServices().get<{ is_paid: boolean }>(
    `payment/make_payment?course_id=${courseId}`
  );
};
