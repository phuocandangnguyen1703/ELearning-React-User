import { RoadMap } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";

const RoadMapPage = () => {
	return <RoadMap />;
};

RoadMapPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default RoadMapPage;
