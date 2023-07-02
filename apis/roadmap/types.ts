import { ELevel } from "@/types/course";

export type IRoadmap = {
  maintype_name: string;
  maintype_id: string;
  percent: number;
  sections: ISection[];
};

export type ISection = {
  section_id: string;
  section_name: string;
  order: number;
  details: IDetail[];
};

export type IDetail = {
  detail_id: string;
  detail_name: string;
  is_important: boolean;
  is_completed: boolean;
};
export type ICourseSimilar = {
  _id: Schema.Types.ObjectId;
  course_level: ELevel;
};
