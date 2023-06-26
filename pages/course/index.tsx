import { AllCourses } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { OptionType } from "@/types/common";
import { useForm } from "react-hook-form";
export type StateStoreType = {
  search: string;
  type: OptionType;
  courses: string[];
};
const AllCoursePage = () => {
  const stateStore = useForm<StateStoreType>({
    defaultValues: {
      search: "",
      courses: [],
    },
  });
  const props = {
    stateStore,
  };
  return <AllCourses {...props} />;
};

AllCoursePage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default AllCoursePage;
