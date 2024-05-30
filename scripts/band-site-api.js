const API_KEY = "?api_key=2aceb997-b826-4a4e-ac6f-a937339089c2";
const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
// You must append ?api_key=<your_api_key_here> to each of your API request URLs

async function fetchComments() {
	try {
		const response = await axios.get(`${API_URL}comments${API_KEY}`);
		console.log(response);
		commentArray = response.data;

		console.log(comments);
	} catch (error) {
		console.log(error);
	}
}

fetchComments();
