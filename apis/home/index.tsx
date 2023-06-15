import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import {ICourse, ICourseMix} from "@/types/IType";

export const all = () => {
    return new AxiosServices().get<IResult<ICourseMix[]>>("home/course/all");

};