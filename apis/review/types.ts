import { IReview } from "@/types/review";

export type ICourseReview = {
  list: (IReview & { fullname: string })[];
  averange: number;
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
};
