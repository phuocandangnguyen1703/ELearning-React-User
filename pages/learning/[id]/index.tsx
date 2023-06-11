import { Elearning } from "@/components/templates";
import { DefaultLayout } from "@/layouts/Layouts";
import { useEffect } from "react";

const ELearningPage = () => {
	useEffect(() => {
		const _initTE = async () => {
			const use = (await import("tw-elements")).initTE;
			const { Collapse, initTE } = await import("tw-elements");
			use({ Collapse, initTE });
		};
		_initTE();
	}, []);
	return <Elearning />;
};

ELearningPage.getLayout = function getLayout(page: React.ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default ELearningPage;
