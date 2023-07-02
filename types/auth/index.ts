import { ERole, IMyDocument } from "..";

export type IUser = {
  role: ERole;
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone?: string;
  biography?: string;
  birthday?: Date;
  facebook?: string;
  job?: string;
} & IMyDocument;
