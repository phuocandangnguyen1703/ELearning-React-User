import { Home } from "@/components/templates";
import { HFLayout } from "../layouts";

function HomePage() {
	return <Home />;
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default HomePage;
