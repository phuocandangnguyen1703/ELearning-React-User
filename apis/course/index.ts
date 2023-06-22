import { ICourse } from "@/types/course";
import AxiosServices from "apis/axiosServices";

export const getCourse = (courseId: string) => {
  return new AxiosServices().get<ICourse>(`course/item/${courseId}`);
};
