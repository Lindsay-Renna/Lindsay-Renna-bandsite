class BandSiteApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.apiUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
	}

	async getComments() {
		try {
			const response = await axios.get(`${this.apiUrl}comments${this.apiKey}`);
			const commentUnsorted = response.data;
			const comments = commentUnsorted.sort(
				(a, b) => a.timestamp - b.timestamp
			);
			console.log(response.data);

			refresh(comments);
		} catch (error) {
			console.log(error);
		}
	}

	async postComment(comment) {
		await axios.post(`${this.apiUrl}comments${this.apiKey}`, comment);

		this.getComments();
	}

	async getShows() {
		try {
			const response = await axios.get(`${this.apiUrl}showdates${this.apiKey}`);
			const shows = response.data;
			refreshShows(shows);
		} catch (error) {
			console.log(error);
		}
	}
}

let bandSiteAPI = new BandSiteApi(
	"?api_key=2aceb997-b826-4a4e-ac6f-a937339089c2"
);
