import { IUser } from "@/types/IType";
import { LoginFormType } from "@/types/login";
import { RegisterFormType } from "@/types/register";
import AxiosServices from "apis/axiosServices";

export const register = (data: RegisterFormType) => {
  return new AxiosServices().post<IUser>(`auth/register`, data);
};

export const login = (data: LoginFormType) => {
  return new AxiosServices().post<{ accessToken: string; user: IUser }>(
    `auth/login`,
    data
  );
};
