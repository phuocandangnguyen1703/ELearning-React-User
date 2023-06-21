import { RoadMap } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";
import { useForm } from "react-hook-form";
const dataRoadMap = [
	{
		title: "ABC",
		skills: [
			{
				title: "Blockchain definition1",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
		],
	},
	{
		title: "ABC",
		skills: [
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
		],
	},
	{
		title: "ABC",
		skills: [
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
		],
	},
	{
		title: "ABC",
		skills: [
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
			{
				title: "Blockchain definition",
				isMarker: true,
			},
		],
	},
];
export type StateStoreType = {
	isOpenModal: boolean;
};
const RoadMapPage = () => {
	const stateStore = useForm<StateStoreType>({
		defaultValues: {
			isOpenModal: false,
		},
	});
	const props = { dataRoadMap, stateStore };
	return <RoadMap {...props} />;
};

RoadMapPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default RoadMapPage;
