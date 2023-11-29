export const reloadRecipeService = async (props) => {	
	const data = await fetch("http://localhost:3000/raja/recipe/get", 
			{
				method: 'GET',
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + props.token,
				},
			},
		)
		const json = await data.json();
		props.setResult(json.userRecipe);
	
	return res;
}