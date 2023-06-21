import { ERecommendStatus } from "@/types/index";
import AxiosServices from "apis/axiosServices";

export const checkStatus = (userId: string) => {
  return new AxiosServices().get<{ status: ERecommendStatus }>(
    `recommend/check_status/${userId}`
  );
};

export const listTag = () => {
  return new AxiosServices().get<string[]>("/recommend/list_tag");
};
