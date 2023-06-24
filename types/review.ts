import { IMyDocument } from ".";

export type IReview = {
  user_id: Schema.Types.ObjectId;
  course_id: Schema.Types.ObjectId;
  course_review_star: EStart;
  content?: string;
} & IMyDocument;

export enum EStart {
  NONE,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
}
