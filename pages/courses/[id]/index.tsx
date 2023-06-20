import { Details } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DetailsPage = () => {
	const props = {
		imageURL: "/banner_details.png",
	};
	const { query } = useRouter();
	const id = query.id;
	useEffect(() => {
		const _initTE = async () => {
			const use = (await import("tw-elements")).initTE;
			const { Collapse, initTE } = await import("tw-elements");
			use({ Collapse, initTE });
		};
		_initTE();
	}, []);

	return <Details {...props} />;
};

DetailsPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default DetailsPage;
