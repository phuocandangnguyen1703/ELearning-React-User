import { Details } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { useRouter } from "next/router";

const DetailsPage = () => {
	const { query } = useRouter();
	const id = query.id;
	return <Details />;
};

DetailsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default DetailsPage;
