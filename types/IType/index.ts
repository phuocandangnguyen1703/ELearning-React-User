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

export type ICourseMix = {
  id: number;
  courseName: string;
  typeName: string;
  statusName: string;
  authorName: string;
  reviewStar: number;
  enrollmentCount: number;
  levelName: string;
  languageName: string;
  courseImage: string;
  courseFee: number;
  description: string;
  tags: string;
  create_at: string;
  update_at: string;
};

export type IUser = {
  message: string;
  _id: string;
  username: string;
  email: string;
  password: string;
  fullname: string;
  phone: string;
  biography: string;
  birthday: string;
  facebook: string;
  job: string;
  avt_img: string;
  background_img: string;
  is_active: number;
  is_deleted: number;
  create_at: Date;
  update_at: Date;
};
