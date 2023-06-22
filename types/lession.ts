import { IMyDocument } from ".";

export type ILesson = {
  chapter_id: Schema.Types.ObjectId;
  lesson_name: string;
  duration: number;
  order: number;
} & IMyDocument;