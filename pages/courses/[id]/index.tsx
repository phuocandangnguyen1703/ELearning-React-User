import { Details } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { useRouter } from "next/router";

const DetailsPage = () => {
	const props = {
		linkimage:"gs://edupath-dfcd4.appspot.com/course_overview.png"
	}
	const { query } = useRouter();
	const id = query.id;
	return <Details {...props} />;
};

DetailsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default DetailsPage;
