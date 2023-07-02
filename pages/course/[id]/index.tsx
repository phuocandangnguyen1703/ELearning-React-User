import { Details } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { ICourse } from "@/types/course";
import { getCourse } from "apis/course";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const { query } = useRouter();
  const id = query.id;
  useEffect(() => {
    if (!id) return;
    (async () => {
      const _initTE = async () => {
        const use = (await import("tw-elements")).initTE;
        const { Collapse, initTE } = await import("tw-elements");
        use({ Collapse, initTE });
      };
      await getCourse(id as string)
        .then((success) => setCourse(success.data))
        .catch((error) => console.log(error));
      await _initTE();
    })();
  }, [id]);

  const props = {
    imageURL: "/banner_details.png",
    course,
    courseId: id as string | undefined,
  };
  return <Details {...props} />;
};

DetailsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default DetailsPage;
