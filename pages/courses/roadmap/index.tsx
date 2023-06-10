import { RoadMap } from "@/components/templates";
import { HFLayout } from "@/layouts/Layouts";

const RoadMapPage = () => {
	const dataRoadMap = [
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
	const props = { dataRoadMap };
	return <RoadMap {...props} />;
};

RoadMapPage.getLayout = function getLayout(page: React.ReactElement) {
	return <HFLayout>{page}</HFLayout>;
};

export default RoadMapPage;
