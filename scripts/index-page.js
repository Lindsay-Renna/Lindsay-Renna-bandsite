const comments = [
	{
		name: "Isaac Tadesse",
		comment:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
		date: new Date(2023, 9, 20),
		image: null,
	},
	{
		name: "Christina Cabrera",
		comment:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
		date: new Date(2023, 9, 28),
		image: null,
	},
	{
		name: "Victor Pinto",
		comment:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
		date: new Date(2023, 10, 2),
		image: null,
	},
];

const newCommentForm = document.querySelector(".new-comment-form");
const commentList = document.querySelector(".posted-comments");

// Form submission event

newCommentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const userName = event.target.userName.value;
	const commentText = event.target.comment.value;
	const nameInput = document.querySelector("#name");
	const commentInput = document.querySelector("#comment");

	// reset error class
	nameInput.classList.remove("error");
	commentInput.classList.remove("error");

	// Validation & Create comment

	if (nameValidation() && commentValidation()) {
		let newComment = {
			name: userName,
			comment: commentText,
			date: new Date(),
			image: "Mohan-muruge.jpg",
		};

		comments.push(newComment);
		newCommentForm.reset();
		refresh();
	}

	// Validation functions

	function nameValidation() {
		if (userName.length === 0) {
			nameInput.classList.add("error");
			return false;
		}
		return true;
	}

	function commentValidation() {
		if (commentText.length === 0) {
			commentInput.classList.add("error");
			return false;
		}
		return true;
	}
});

// Create comments on the page

const postComment = (comment) => {
	const commentBlock = document.createElement("div");
	commentBlock.classList.add("comment-block");
	commentList.appendChild(commentBlock);

	// add user profile image
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("user-image-container");
	commentBlock.appendChild(imageContainer);

	if (comment.image === null) {
		const imageElement = document.createElement("div");
		imageElement.classList.add("null-img");
		imageContainer.appendChild(imageElement);
	} else {
		const imageElement = document.createElement("img");
		imageElement.classList.add("user-image");
		imageElement.setAttribute("src", `./assets/Images/${comment.image}`);
		imageContainer.appendChild(imageElement);
	}

	// add comments data
	const commentContainer = document.createElement("div");
	commentContainer.classList.add("comments__wrapper");
	commentBlock.appendChild(commentContainer);

	// user name data
	const commenterName = document.createElement("h5");
	commenterName.classList.add("user-name");
	commenterName.textContent = comment.name;
	commentContainer.appendChild(commenterName);

	// time-stamp data
	const commentTime = document.createElement("p");
	commentTime.classList.add("time-stamp");
	commentTime.textContent = formatDate(comment.date);
	commentContainer.appendChild(commentTime);

	// user comment data
	const commentText = document.createElement("p");
	commentText.classList.add("user-comment");
	commentText.textContent = comment.comment;
	commentContainer.appendChild(commentText);

	commentList.insertBefore(commentBlock, commentList.firstChild);
};

function formatDate(date) {
	const options = { year: "numeric", month: "2-digit", day: "2-digit" };
	return new Intl.DateTimeFormat("en-US", options).format(date);
}

function refresh() {
	// do a loop over the array to create the comments
	commentList.innerHTML = "";
	comments.forEach(postComment);
}

refresh();
