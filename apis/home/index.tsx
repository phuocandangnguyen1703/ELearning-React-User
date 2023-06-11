import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import {ICourse, ICourseMix} from "@/types/course";


export const all = () => {
    return new AxiosServices().get<IResult<ICourseMix[]>>("user/course/all");

};