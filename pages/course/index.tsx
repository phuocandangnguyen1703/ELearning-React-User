import { AllCourses } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { OptionType } from "@/types/common";
import { ELanguage, ELevel } from "@/types/course";
import { getEnumKeys, getEnumValues } from "@/utils/enum";
import { useForm } from "react-hook-form";
export type StateStoreType = {
  search: string;
  courses: string[];
  option: {
    maintypes: OptionType[];
    authors: OptionType[];
    languages: OptionType[];
    levels: OptionType[];
  };
  maintype_id: Schema.Types.ObjectId | undefined;
  author_id: Schema.Types.ObjectId | undefined;
  language: ELanguage | undefined;
  level: ELevel | undefined;
};

const AllCoursePage = () => {
  const stateStore = useForm<StateStoreType>({
    defaultValues: {
      search: "",
      courses: [],

      option: {
        maintypes: [],
        authors: [],
        languages: getEnumKeys(ELanguage).map((key) => ({
          label: key,
          value: ELanguage[key],
        })),
        levels: getEnumKeys(ELevel).map((key) => ({
          label: key,
          value: ELevel[key],
        })),
      },
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
