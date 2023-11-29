export const deleteRecipeService = async ({recipe, token}) => {
	const body = JSON.stringify(recipe);

	
	const res = await fetch('http://localhost:3000/raja/recipe/delete',
		{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token,
			},
			body: body
      	},
	);
	
	return res;
}