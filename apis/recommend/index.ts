import { ERecommendStatus } from "@/types/index";
import AxiosServices from "apis/axiosServices";

export const checkStatus = (userId: string) => {
  return new AxiosServices().get<{
    status: ERecommendStatus;
    prediction: {
      maintype: string;
      maintype_id: any;
      percent: number;
    }[];
  }>(`recommend/check_status/${userId}`);
};

export const listTag = () => {
  return new AxiosServices().get<string[]>("/recommend/list_tag");
};

export const processRecommend = (skills?: string[]) => {
  return new AxiosServices().post<
    {
      maintype: string;
      maintype_id: string;
      percent: number;
    }[]
  >("/recommend/process_recommend", {
    skills,
  });
};

export const chooseMaintype = (choosen: string) => {
  return new AxiosServices().get(
    `/recommend/choose_maintype?choosen=${choosen}`
  );
};
