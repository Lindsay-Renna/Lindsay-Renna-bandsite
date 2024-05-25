const shows = [
	{
		date: "Mon Sept 09 2024",
		venue: "Ronald Lane",
		city: "San Francisco, CA",
	},
	{
		date: "Tue Sept 17 2024",
		venue: "Pier 3 East",
		city: "San Francisco, CA",
	},
	{
		date: "Sat Oct 12 2024",
		venue: "View Lounge",
		city: "San Francisco, CA",
	},
	{
		date: "Sat Nov 16 2024",
		venue: "Hyatt Agency",
		city: "San Francisco, CA",
	},
	{
		date: "Fri Nov 29 2024",
		venue: "Moscow Center",
		city: "San Francisco, CA",
	},
	{
		date: "Wed Dec 18 2024",
		venue: "Press Club",
		city: "San Francisco, CA",
	},
];

// Insert show info into page
const showSection = document.querySelector(".show");

function postShow(show) {
	const showBlock = document.createElement("div");
	showBlock.classList.add("show__block");
	showSection.appendChild(showBlock);

	const dateHeader = document.createElement("h6");
	dateHeader.textContent = "DATE";
	showBlock.appendChild(dateHeader);

	const showDate = document.createElement("p");
	showDate.classList.add("show__date");
	showDate.textContent = show.date;
	showBlock.appendChild(showDate);

	const venueHeader = document.createElement("h6");
	venueHeader.textContent = "VENUE";
	showBlock.appendChild(venueHeader);

	const showVenue = document.createElement("p");
	showVenue.classList.add("show__venue");
	showVenue.textContent = show.venue;
	showBlock.appendChild(showVenue);

	const cityHeader = document.createElement("h6");
	cityHeader.textContent = "LOCATION";
	showBlock.appendChild(cityHeader);

	const showCity = document.createElement("p");
	showCity.classList.add("show__city");
	showCity.textContent = show.city;
	showBlock.appendChild(showCity);

	const button = document.createElement("button");
	button.classList.add("show__button");
	button.textContent = "BUY TICKETS";
	showBlock.appendChild(button);
}

// populate show data
shows.forEach(postShow);

const selectableDivs = document.querySelectorAll(".show__block");

function handleSelect(event) {
	selectableDivs.forEach((div) => {
		div.classList.remove("selected");
	});
	event.currentTarget.classList.add("selected");
}

selectableDivs.forEach((div) => {
	div.addEventListener("click", handleSelect);
});
