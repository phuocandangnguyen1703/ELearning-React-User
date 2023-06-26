import AxiosServices from "../axiosServices";

export const searchCourses = async (data: { search?: string }) => {
  return new AxiosServices().post<{ _id: string }[]>(`search/courses`, data);
};
