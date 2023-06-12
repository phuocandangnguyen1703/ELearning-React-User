import { Details, Home } from "@/components/templates";
import { HFLayout } from "../layouts";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";
import DATA_COURSE from "@/mocks/course.json";
import { storage } from "../apis/firebase";
import { ICourseMix } from "@/types/course";

import React, { useEffect, useState } from "react";
import { all } from "../apis/home";
import { useRouter } from "next/router";
import { UserReduxProps } from "@/redux/features/slices/user";

// const courses: ICourseMix[] = DATA_COURSE.$values;

export type StateHome = {
	activeCourse: ICourseMix | null;
};

const HomePage = () => {
	const [course, setCourse] = useState<ICourseMix[]>([]);
	const user = useSelector((state: RootState) => state.user);
	const stateStore = useForm<StateHome>({
		defaultValues: {
			activeCourse: null,
		},
	});
	useEffect(() => {
		all()
			.then((success) => {
				setCourse(success.data.$values);
				stateStore.setValue("activeCourse", success.data.$values[0]);
			})
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
