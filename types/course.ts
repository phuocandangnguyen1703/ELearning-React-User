import { IMyDocument } from ".";
import { IChapter } from "./chapter";

export enum ELevel {
  NONE,
  ALL_LEVELS,
  BEGINNER,
  INTERMEDIATE,
  EXPERT,
}

export enum ELanguage {
  NONE,
  VIETNAMESE,
  ENGLISH,
}

export enum EApprovalsStatus {
  NONE,
  ACCEPT,
  DENY,
  WATTING,
}

export enum ECourseStatus {
  NONE,
  WATTING,
  OPEN,
  CLOSE,
  FULL_ACCESS,
}

export type ICourse = {
  chapters: IChapter[];
  duration: number;
  maintype_id: string;
  maintype_name: string;
  author_id: string;
  fullname: string;
  detail_id: string;
  course_level: number;
  course_language: number;
  course_name: string;
  approval_status: number;
  course_fee: number;
  description: string;
  course_status: number;
  course_img: string;
  tag_id?: string;
  tag_name?: string;
  lesson_quantity?: number;
  enrollment?: number;
  star?: number;
} & IMyDocument;
