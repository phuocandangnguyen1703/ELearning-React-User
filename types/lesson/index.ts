export type ILesson = {
  id: number;
  chapterID: number;
  lessonName: string;
  lessonURL: string;
  duration: number;
  is_active: number;
  is_deleted: number;
  create_at: Date;
  update_at: Date;
};
