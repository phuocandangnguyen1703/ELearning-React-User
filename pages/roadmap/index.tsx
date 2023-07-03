import { RoadMap } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { myRoadmap } from "apis/roadmap";
import { IRoadmap } from "apis/roadmap/types";
import { Permission } from "middleware";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type StateStoreType = {
	isOpenModal: any;
	isOpenRechoose: boolean;
};
const RoadMapPage = () => {
	const stateStore = useForm<StateStoreType>({
		defaultValues: {
			isOpenModal: undefined,
			isOpenRechoose: false,
		},
	});
	const [roadmap, setRoadmap] = useState<IRoadmap | undefined>(undefined);
	const handleReload = () => {
		myRoadmap()
			.then((success) => setRoadmap(success.data))
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		handleReload();
	}, []);
	const props = { roadmap, stateStore, handleReload };
	return <RoadMap {...props} />;
};

RoadMapPage.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<HFLayout>
			<Permission>{page}</Permission>
		</HFLayout>
	);
};

export default RoadMapPage;
