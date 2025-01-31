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
		};

		newCommentForm.reset();
		bandSiteAPI.postComment(newComment);
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

	if (comment.image === undefined) {
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
	commentTime.textContent = formatDate(comment.timestamp);
	commentContainer.appendChild(commentTime);

	// user comment data
	const commentText = document.createElement("p");
	commentText.classList.add("user-comment");
	commentText.textContent = comment.comment;
	commentContainer.appendChild(commentText);

	// Like IMG/counter
	const likesBox = document.createElement("div");
	likesBox.classList.add("like-box");
	commentContainer.appendChild(likesBox);

	const likeButton = document.createElement("img");
	likeButton.classList.add("like-button");
	likeButton.src = "./assets/Icons/SVG/icon-like.svg";
	likesBox.appendChild(likeButton);

	likeButton.addEventListener("click", (e) => {
		bandSiteAPI.addLike(comment.id);
		likeButton.classList.add("grey-out");
	});

	const likeCount = document.createElement("p");
	likeCount.classList.add("like-count");
	likeCount.innerText = comment.likes;
	likesBox.appendChild(likeCount);

	// Delete icon
	const deleteButton = document.createElement("img");
	deleteButton.classList.add("delete-button");
	deleteButton.src = "./assets/Icons/SVG/icon-delete.svg";
	commentContainer.appendChild(deleteButton);

	deleteButton.addEventListener("click", (e) => {
		bandSiteAPI.deleteComment(comment.id);
		deleteButton.classList.add("grey-out");
	});

	commentList.insertBefore(commentBlock, commentList.firstChild);
};

function formatDate(date) {
	const options = { year: "numeric", month: "2-digit", day: "2-digit" };
	return new Intl.DateTimeFormat("en-US", options).format(date);
}

function refresh(comments) {
	// do a loop over the array to create the comments
	commentList.innerHTML = "";
	comments.forEach(postComment);
}

bandSiteAPI.getComments();
