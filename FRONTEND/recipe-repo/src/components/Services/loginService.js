export const loginService = async (data) => {
	const body = JSON.stringify(data);
	console.log(body);

	const res = await fetch('http://localhost:3000/raja/login',
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