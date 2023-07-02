import AxiosServices from "@/apis/axiosServices";
import { IUser } from "@/types/auth";
import { ICourse } from "@/types/course";
import { ITag } from "@/types/tag";

export const getListMyCourse = () => {
  return new AxiosServices().get<{
    courses: ICourse[];
    user: IUser;
    tags: ITag[];
  }>(`/mycourse/list_my_course`);
};
