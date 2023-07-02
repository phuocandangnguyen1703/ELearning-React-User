import { IMyDocument } from ".";
import { ILesson } from "./lession";

export type IChapter = {
  course_id: Schema.Types.ObjectId;
  chapter_name: string;
  order: number;
  duration?: number;
  lessons?: ILesson[];
} & IMyDocument;
