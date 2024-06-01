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

			refresh(comments);
		} catch (error) {
			console.log(error);
		}
	}

	async postComment(comment) {
		try {
			await axios.post(`${this.apiUrl}comments${this.apiKey}`, comment);

			this.getComments();
		} catch (error) {
			console.log(error);
		}
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

	async deleteComment(commentID) {
		await axios.delete(`${this.apiUrl}comments/${commentID}${this.apiKey}`);
		this.getComments();
	}

	async addLike(commentID) {
		await axios.put(`${this.apiUrl}comments/${commentID}/like${this.apiKey}`);
		this.getComments();
	}
}

let bandSiteAPI = new BandSiteApi(
	"?api_key=2aceb997-b826-4a4e-ac6f-a937339089c2"
);
