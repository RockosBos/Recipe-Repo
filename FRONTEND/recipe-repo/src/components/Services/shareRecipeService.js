export const shareRecipeService = async (data) => {
	const body = JSON.stringify(data);

	const res = await fetch('',
		{
			method: '',
			headers: {
				"Content-Type": "application/json",
			},
			body: body
      	},
	);
	return res;
}