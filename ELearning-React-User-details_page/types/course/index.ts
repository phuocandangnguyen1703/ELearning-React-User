export type IMainTypes = {
  id: number;
  typeName: string;
  is_active: number;
  is_deleted: number;
  create_at: Date;
  update_at: Date;
};

export type ICourse = {
  id: number;
  courseTypeID: number;
  courseName: string;
  courseImage: string;
  courseFee: number;
  description: string;
  courseState: number;
  commission: number;
  is_active: number;
  is_deleted: number;
  create_at: Date;
  update_at: Date;
};

export type IChapter = {
  id: number;
  courseID: number;
  chapterName: string;
  is_active: number;
  is_deleted: number;
  create_at: Date;
  update_at: Date;
};
