import { Home } from "@/components/templates";
import { HFLayout } from "../layouts";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";
export type CourseType = {
	id: number;
	name: string;
	type: string;
};
const courses: CourseType[] = [
	{
		id: 1,
		name: "HỌC REACT TỪ A- Z12",
		type: "Khóa học phổ biến",
	},
	{
		id: 2,
		name: "HỌC REACT TỪ A- Z2",
		type: "Khóa học phổ biến",
	},
];
export type StateHome = {
	activeCourse: CourseType | null;
};
const HomePage = () => {
	const user = useSelector((state: RootState) => state.user);
	const stateStore = useForm<StateHome>({
		defaultValues: {
			activeCourse: null,
		},
	});
	const props = {
		courses,
		stateStore,
		user,
	};
	return <Home {...props} />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default HomePage;
