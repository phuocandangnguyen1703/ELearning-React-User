import { getListMyCourse } from "@/apis/auth/mycourse";
import { useLoading } from "@/components/atoms";
import { MyCourse } from "@/components/templates";
import { HFLayout } from "@/layouts/index";
import { IUser } from "@/types/auth";
import { ICourse } from "@/types/course";
import { ITag } from "@/types/tag";
import { Permission } from "middleware";
import React, { useEffect, useState } from "react";

type Props = {};

const MyCoursePage = (props: Props) => {
  const [data, setData] = useState<
    { courses: ICourse[]; user: IUser; tags: ITag[] } | undefined
  >(undefined);
  const loading = useLoading();
  useEffect(() => {
    (async () => {
      loading.open();
      await getListMyCourse()
        .then((success) => setData(success.data))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, []);
  return <MyCourse data={data}></MyCourse>;
};

MyCoursePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <HFLayout>
      <Permission>{page}</Permission>
    </HFLayout>
  );
};

export default MyCoursePage;
