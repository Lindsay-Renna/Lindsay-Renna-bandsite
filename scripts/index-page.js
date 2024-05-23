const comments = [
	{
		name: "Victor Pinto",
		comment:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
		date: new Date(2023, 10, 2),
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
		name: "Isaac Tadesse",
		comment:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
		date: new Date(2023, 9, 20),
		image: null,
	},
];

console.log(comments);

{
	/* <div class="posted-comments">
<div class="user-image">
    <div class="null-image"></div>
</div>
<div class="comments__wrapper">
    <h3 class="user-name">Lindsay Renna</h3>
    <p class="time-stamp">11/02/2023</p>
    <p class="user-comment">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        rerum soluta fugiat odio explicabo, reiciendis odit, repellat quam
        cumque iusto rem amet esse labore sapiente adipisci? Delectus
        consectetur illum voluptatum!
    </p>
</div>
</div> */
}

const newCommentForm = document.querySelector(".new-comment-form");

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

	nameValidation();
	commentValidation();

	let newComment = {
		name: userName,
		comment: commentText,
		date: new Date(),
		userImage: "/Mohan-muruge.jpg",
	};

	comments.push(newComment);
	newCommentForm.reset();
	postComment(comments[comments.length - 1]);

	console.log(comments);

	// Form Validation

	function nameValidation() {
		if (userName.length === 0) {
			nameInput.classList.add("error");
			return;
		}
	}

	function commentValidation() {
		if (commentText.length === 0) {
			commentInput.classList.add("error");
			return;
		}
	}
});

// make past-comments as an object of username, timestamp, comment and user image
// do a loop over the array to create the comments

const postComment = (comment) => {
	const commentList = document.querySelector(".posted-comments");

	// add user profile image
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("user-image");
	commentList.appendChild(imageContainer);

	if (comment.image === null) {
		const imageElement = document.createElement("div");
		imageElement.classList.add("null-img");
		commentList.appendChild(imageElement);
	} else {
		const imageElement = document.createElement("img");
		imageElement.classList.add("img");
		imageElement.setAttribute("src", `./Assets/Icons/SVG/${comment.image}`);
		commentList.appendChild(imageElement);
	}

	// add comments data
	const commentContainer = document.createElement("div");
	commentContainer.classList.add("comments__wrapper");
	commentList.appendChild(commentContainer);

	// user name data
	const commenterName = document.createElement("h3");
	commenterName.classList.add("user-name");
	commenterName.textContent = comment.name;
	commentContainer.appendChild(commenterName);

	// time-stamp data
	const commentTime = document.createElement("p");
	commentTime.classList.add("time-stamp");
	commentTime.textContent = comment.date;
	commentContainer.appendChild(commentTime);

	// user comment data
	const commentText = document.createElement("p");
	commentText.classList.add("user-comment");
	commentText.textContent = comment.comment;
	commentContainer.appendChild(commentText);
};

postComment(comments[0]);
postComment(comments[1]);
postComment(comments[2]);
postComment(comments[3]);
