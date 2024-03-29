import { IUser } from "@/types/auth";
import AxiosServices from "../axiosServices";
import { IMaintype } from "@/types/maintype";
import { ELanguage, ELevel, ICourse } from "@/types/course";

export const searchCourses = async (data: {
  search?: string;
  maintype_id?: string;
  course_language?: ELanguage;
  course_level?: ELevel;
}) => {
  return new AxiosServices().post<ICourse[]>(`search/courses`, data);
};

export const allUsers = () => {
  return new AxiosServices().get<IUser[]>("/admin/user/all");
};
export const allMaintypes = () => {
  return new AxiosServices().get<IMaintype[]>(`admin/maintype/all`);
};
