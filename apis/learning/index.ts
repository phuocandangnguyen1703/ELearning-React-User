import AxiosServices from "apis/axiosServices";

export const getVideo = async (lessonId: string, courseId: string) => {
  return await new AxiosServices()
    .get(`/learning/video/${lessonId}?course_id=${courseId}`, {
      responseType: "blob",
    })
    .then((success) => URL.createObjectURL(success.data as Blob));
};
