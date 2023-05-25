import { IMainTypes } from "~/types/course";
import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import { IFormik } from "~/pages/main_types/Add";

export const all = () => {
  return new AxiosServices().get<IResult<IMainTypes[]>>(
    "admin/course/main_type/all"
  );
};

export const add = (data: IFormik) => {
  return new AxiosServices().post<IMainTypes>("admin/course/main_type/create", {
    TypeName: data.name,
  });
};

export const remove = (id: number) => {
  return new AxiosServices().delete<IMainTypes>(
    `admin/course/main_type/delete/${id}`
  );
};
