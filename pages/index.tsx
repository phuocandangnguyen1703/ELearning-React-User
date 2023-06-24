import { allCourses } from "@/apis/course";
import { Home } from "@/components/templates";
import { UserReduxProps } from "@/redux/features/slices/user";
import { RootState } from "@/redux/store";
import { ICourseMix } from "@/types/IType";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { HFLayout } from "../layouts";

// const courses: ICourseMix[] = DATA_COURSE.$values;

export type StateHome = {
  activeCourse: string | undefined;
};

const HomePage = () => {
  const [course, setCourse] = useState<string[]>([]);
  const user = useSelector((state: RootState) => state.user);
  const stateStore = useForm<StateHome>({
    defaultValues: {
      activeCourse: undefined,
    },
  });
  useEffect(() => {
    allCourses()
      .then((success) => setCourse(success.data.map((x) => x._id)))
      .catch((error) => console.log(error));
  }, []);
  const [auth, setAuth] = useState<UserReduxProps>();

  useEffect(() => {
    setAuth(user);
  }, [user]);
  const props = {
    courses: course,
    stateStore,
    user: auth,
  };

  return <Home {...props} />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

export default HomePage;
