import { HFLayout } from "~/layouts";

function Home() {
	return <div className=""></div>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default Home;
