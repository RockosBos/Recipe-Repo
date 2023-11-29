export const editRecipeService = async ({Recipe, token}) => {
	const body = JSON.stringify(Recipe);
	
	const res = await fetch('',
		{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token,
			},
			body: body
      	},
	);
	
	return res;
}