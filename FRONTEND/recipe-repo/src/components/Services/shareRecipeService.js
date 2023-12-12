export const shareRecipeService = async ({data, token}) => {
	const body = JSON.stringify(data);

	const res = await fetch('http://localhost:3000/raja/recipe/share',
		{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"authorization": "Bearer " + token
			},
			body: body
      	},
	);
	return res;
}