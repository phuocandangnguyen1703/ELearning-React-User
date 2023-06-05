import { Details } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";

const DetailsPage = () => {
	return <Details />;
};

DetailsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default DetailsPage;
