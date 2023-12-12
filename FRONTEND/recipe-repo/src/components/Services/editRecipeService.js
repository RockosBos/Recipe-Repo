export const editRecipeService = async ({Recipe, token}) => {
	const body = JSON.stringify(Recipe);
	
	const res = await fetch('http://localhost:3000/raja/recipe/update',
		{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token,
			},
			body: body
      	},
	);
	
	return res;
}