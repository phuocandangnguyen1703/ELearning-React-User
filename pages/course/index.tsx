import { allMaintypes, allUsers, searchCourses } from "@/apis/search";
import { useLoading } from "@/components/atoms";
import { AllCourses } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { OptionType } from "@/types/common";
import { ELanguage, ELevel } from "@/types/course";
import { getEnumKeys } from "@/utils/enum";
import _ from "lodash";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
export type StateStoreType = {
  search: string;
  courses: any[];
  option: {
    maintypes: OptionType[];
    authors: OptionType[];
    languages: OptionType[];
    levels: OptionType[];
  };
  page: number;
  maintype_id: OptionType;
  language: OptionType;
  level: OptionType;
};

const AllCoursePage = () => {
  const stateStore = useForm<StateStoreType>({
    defaultValues: {
      search: "",
      courses: [],
      page: 1,
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

  const loading = useLoading();
  useEffect(() => {
    (async () => {
      loading.open();
      await searchCourses({})
        .then((success) =>
          stateStore.setValue(
            "courses",
            success.data.map((x) => x._id)
          )
        )
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, []);
  const handleSearch = useCallback(() => {
    _.throttle(() => {
      const search = stateStore.getValues("search");
      searchCourses({ search: search })
        .then((success) =>
          stateStore.setValue(
            "courses",
            success.data.map((x) => x._id)
          )
        )
        .catch((error) => console.log(error));
    }, 300)();
  }, []);
  useEffect(() => {
    allUsers()
      .then((success) =>
        stateStore.setValue(
          "option.authors",
          success.data.map((user) => ({
            label: user.fullname,
            value: user._id,
          }))
        )
      )
      .catch((error) => console.log(error));
    allMaintypes()
      .then((success) =>
        stateStore.setValue(
          "option.maintypes",
          success.data.map((maintype) => ({
            value: maintype._id,
            label: maintype.type_name,
          }))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const onChangeFilter = () => {
    const { language, level, maintype_id } = stateStore.getValues();
    // call api
    const search = stateStore.getValues("search");
    searchCourses({
      search: search,
      maintype_id: maintype_id?.value,
      course_language: language?.value,
      course_level: level?.value,
    })
      .then((success) =>
        stateStore.setValue(
          "courses",
          success.data.map((x) => x._id)
        )
      )
      .catch((error) => console.log(error));
    const courses: any = [];
    stateStore.setValue("courses", courses);
  };

  const props = {
    stateStore,
    handleSearch,
    onChangeFilter,
  };
  return <AllCourses {...props} />;
};

AllCoursePage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default AllCoursePage;
