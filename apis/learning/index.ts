import AxiosServices from "apis/axiosServices";

export const getVideo = async (lessonId: string, courseId: string) => {
  return await new AxiosServices()
    .get<{ videoToken: string }>(
      `learning/utils/video/${lessonId}?course_id=${courseId}`,
      {
        // responseType: "blob",
      }
    )
    .then((success) => success.data.videoToken);
  // return await new AxiosServices()
  //   .get(`/learning/video/${lessonId}?course_id=${courseId}`, {
  //     responseType: "blob",
  //   })
  //   .then((success) => URL.createObjectURL(success.data as Blob));
};

export const streamVideo = (token: string) => {
  return `${process.env.BACKEND}learning/video/stream?token=${token}`;
};
