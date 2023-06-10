import AxiosServices from "../axiosServices";
import { IResult } from "../types";

export const all = () => {
	return new AxiosServices().get<IResult<any[]>>("admin/lessons/main/all");
};
