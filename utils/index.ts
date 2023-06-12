export const converDateTime = (date: string | undefined) => {
	if (!date) {
		return "";
	}
	const formattedDate = new Date(date).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	return formattedDate;
};
