import AxiosServices from "../axiosServices";
import { IResult } from "../types";
import {ICourse, ICourseMix, IUser} from "@/types/IType";
import {RegisterFormType} from "@/types/register";

export const all = () => {
    return new AxiosServices().get<IResult<ICourseMix[]>>("");

};


export const add = (data: RegisterFormType) => {
    const form = new FormData();
    form.append("username", data.username);
    form.append("password", data.password);
    form.append("email", data.email);
    form.append("fullname", data.fullname);

    return new AxiosServices().post<IUser>(
        "user/register", // Specify the API endpoint URL
        form, // Send the form data
        {
            headers: { "Content-Type": "multipart/form-data" },
        }
    );
};