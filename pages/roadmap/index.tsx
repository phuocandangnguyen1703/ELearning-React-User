import { RoadMap } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { myRoadmap } from "apis/roadmap";
import { IRoadmap } from "apis/roadmap/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type StateStoreType = {
  isOpenModal: string | undefined;
};
const RoadMapPage = () => {
  const stateStore = useForm<StateStoreType>({
    defaultValues: {
      isOpenModal: undefined,
    },
  });
  const [roadmap, setRoadmap] = useState<IRoadmap | undefined>(undefined);
  useEffect(() => {
    myRoadmap().then((success) => setRoadmap(success.data));
  }, []);
  const props = { roadmap, stateStore };
  return <RoadMap {...props} />;
};

RoadMapPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default RoadMapPage;
