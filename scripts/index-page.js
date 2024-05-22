const postedComments = [
    {  "name": "Victor Pinto",
        "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        "date":newDate(2023-11-2),
        "userImage":null
    },
    {"name": "Christina Cabrera",
    "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    "date":newDate(2023-10-28),
    "userImage":null

    }
    {"name": "Isaac Tadesse",
    "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    "date":newDate(2023-10-20),
    "userImage":null
    }
]


const commentForm = document.querySelector(".new-comment-form");

commentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const userName = event.commentForm.name.value;
	const commentText = event.commentForm.comment.value;
	const nameInput = document.querySelector("#name");
	const commentInput = document.querySelector("#comment");

	console.log(event.commentForm.name.value);

	if (userName === "") {
		nameInput.classList.add("error");
		return;
	} else if (commentInput === "") {
		commentInput.classList.add("error");
	}
});


// make past-comments as an object of username, timestamp, comment and user image
// push new comment data to the array of comments
// do a loop over the array to create the comments