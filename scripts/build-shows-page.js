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
	showDate.textContent = formatDate(show.date);
	showBlock.appendChild(showDate);

	const venueHeader = document.createElement("h6");
	venueHeader.textContent = "VENUE";
	showBlock.appendChild(venueHeader);

	const showVenue = document.createElement("p");
	showVenue.classList.add("show__venue");
	showVenue.textContent = show.place;
	showBlock.appendChild(showVenue);

	const cityHeader = document.createElement("h6");
	cityHeader.textContent = "LOCATION";
	showBlock.appendChild(cityHeader);

	const showCity = document.createElement("p");
	showCity.classList.add("show__city");
	showCity.textContent = show.location;
	showBlock.appendChild(showCity);

	const button = document.createElement("button");
	button.classList.add("show__button");
	button.textContent = "BUY TICKETS";
	showBlock.appendChild(button);
}

// populate show data
bandSiteAPI.getShows();

function refreshShows(shows) {
	shows.forEach(postShow);
	const selectableDivs = document.querySelectorAll(".show__block");
	selectableDivs.forEach((div) => {
		div.addEventListener("click", handleSelect);
	});
}

function handleSelect(event) {
	const selectableDivs = document.querySelectorAll(".show__block");
	selectableDivs.forEach((div) => {
		div.classList.remove("selected");
	});
	event.currentTarget.classList.add("selected");
}

function formatDate(milliseconds) {
	const date = new Date(milliseconds);

	// Array of weekday and month names
	const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Get the required components of the date
	const weekday = weekdays[date.getUTCDay()];
	const month = months[date.getUTCMonth()];
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();

	// Format the date string
	return `${weekday} ${month} ${day} ${year}`;
}
