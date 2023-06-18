export type IMyDocument = {
  _id: string;
  __v: number;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export enum ERole {
  NONE,
  ADMIN,
  STUDENT,
}
