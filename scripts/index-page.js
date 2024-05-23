const commentData = [
	{
		name: "Victor Pinto",
		comment:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
		date: new Date(2023, 10, 2),
		userImage: null,
	},
	{
		name: "Christina Cabrera",
		comment:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
		date: new Date(2023, 9, 28),
		userImage: null,
	},
	{
		name: "Isaac Tadesse",
		comment:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
		date: new Date(2023, 9, 20),
		userImage: null,
	},
];

console.log(commentData);

/*
<div class="posted-comments">
    <div class="user-image">
        <div class="null-image"></div>
    </div>
    <div class="comments__wrapper">
        <h3 class="user-name">Lindsay Renna</h3>
        <p class="time-stamp">11/02/2023</p>
        <p class="user-comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Officiis rerum soluta fugiat odio explicabo, reiciendis odit,
            repellat quam cumque iusto rem amet esse labore sapiente
            adipisci? Delectus consectetur illum voluptatum!
        </p>
    </div>
</div>
</div> */

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
		userImage: "./assets/Images/Mohan-muruge.jpg",
	};

	commentData.push(newComment);
	newCommentForm.reset();

	console.log(commentData);

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
// push new comment data to the array of comments
// do a loop over the array to create the comments
