import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../apis/firebase";
import { ImageOptimizing } from "@/components/atoms";

interface ImageProps {
	urldb?: string;
}

const ImageComponent: React.FC<ImageProps> = ({ urldb }) => {
	const [imageUrl, setImageUrl] = useState("");
	const base_link = "gs://edupath-dfcd4.appspot.com/";

	useEffect(() => {
		const getImageUrl = async () => {
			try {
				let url;
				if (urldb) {
					url = await getDownloadURL(ref(storage, base_link + urldb));
				} else {
					url = await getDownloadURL(ref(storage, base_link + " "));
				}
				setImageUrl(url);
			} catch (error) {
				console.error("Error getting image URL from Firebase Storage:", error);
			}
		};
		getImageUrl();
	}, [urldb]);

	return (
		<>
			{imageUrl && (
				<ImageOptimizing
					objectFit="contain"
					src={imageUrl}
					blurhash="NVKKc$Ny4n%LNG%M~qxux]o2o2X8-;kW%LoeRjt7"
				/>
			)}
		</>
	);
};

export default ImageComponent;
