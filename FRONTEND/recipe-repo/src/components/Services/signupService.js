export const signupService = async (data) => {
	const body = JSON.stringify(data);
	console.log(body);

	const res = await fetch('http://localhost:3000/raja/signup',
		{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: body
      	},
	);
	return res;
}