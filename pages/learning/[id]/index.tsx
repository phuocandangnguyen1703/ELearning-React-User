import { Elearning } from "@/components/templates";
import { DefaultLayout } from "@/layouts/Layouts";
import { ICourse } from "@/types/course";
import { getCourse } from "apis/course";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ELearningPage = () => {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const { query } = useRouter();
  const lessonId = query.id as string | undefined;
  const courseId = query.course_id as string | undefined;
  useEffect(() => {
    if (!courseId) return;
    (async () => {
      const _initTE = async () => {
        const use = (await import("tw-elements")).initTE;
        const { Collapse, initTE } = await import("tw-elements");
        use({ Collapse, initTE });
      };
      await getCourse(courseId as string)
        .then((success) => setCourse(success.data))
        .catch((error) => console.log(error));
      await _initTE();
    })();
  }, [courseId]);
  if (!lessonId || !courseId || !course)
    return <div className="w-full h-full bg-white"></div>;
  return <Elearning courseId={courseId} lessonId={lessonId} course={course} />;
};

ELearningPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ELearningPage;
