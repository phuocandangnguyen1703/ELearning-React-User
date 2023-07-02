import { IUser } from "@/types/auth";
import { LoginFormType } from "@/types/login";
import { RegisterFormType } from "@/types/register";
import AxiosServices from "apis/axiosServices";

export const register = (data: RegisterFormType) => {
  return new AxiosServices().post<{
    accessToken: string;
    user: IUser;
    refreshToken: string;
  }>(`auth/register`, data);
};

export const login = (data: LoginFormType) => {
  return new AxiosServices().post<{
    accessToken: string;
    user: IUser;
    refreshToken: string;
  }>(`auth/login`, data);
};
