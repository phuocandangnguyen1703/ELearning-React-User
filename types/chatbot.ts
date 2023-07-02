import { IMyDocument } from ".";

export type IChatbot = {
  user_id: Schema.Types.ObjectId;
  from: EChatbotFrom;
  messages: string;
} & IMyDocument;

export enum EChatbotFrom {
  NONE,
  STUDENT,
  BOT,
}
