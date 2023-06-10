import { Home } from "@/components/templates";
import { HFLayout } from "../layouts";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";
import DATA_COURSE from "@/mocks/course.json";
export type CourseType = {
	id: number;
	courseTypeID: number;
	courseTypeName: string;
	courseTag: string;
	courseName: string;
	courseImage: string;
	courseFee: number;
	description: string;
	courseState: number;
	commission: number;
	is_active: number;
	is_deleted: number;
	create_at: string;
	update_at: string;
	approvals: number;
	chapters: number | null;
	reviews: number | null;
};
const courses: CourseType[] = DATA_COURSE.$values;
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
