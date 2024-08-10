// /*
// Step 1: Get references to DOM elements
// */
// // Get a reference to the main container
// const container = document.querySelector(".container");

// // Reference of all available seats
// const seats = document.querySelectorAll(".row .seat:not(.sold)");

// // Reference of the count and total elements
// const count = document.getElementById("count");
// const total = document.getElementById("total");

// // Reference of the movie dropdown
// const movieSelect = document.getElementById("movie");

// // Reference for menu button and dropdown
// const menuButton = document.getElementById("menu-button");
// const dropdown = document.querySelector(".menu .dropdown");

// /*
// Step 2: Add event listeners
// */

// // Event listener for movie selection change
// movieSelect.addEventListener("change", e => {
//   // Update ticket price and store selected movie data
//   ticketPrice = +e.target.value;
//   setMovieData(e.target.selectedIndex, e.target.value);

//   // Update displayed count and total
//   updateSelectedCount();
// });

// // Event listener for seat clicks
// container.addEventListener("click", e => {
//   // check if a seat is clicked and not sold
//   if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
//     // Toggle seat selection
//     e.target.classList.toggle("selected");

//     // Update displayed count and total
//     updateSelectedCount();
//   }
// });

// // Event listener for menu button click
// menuButton.addEventListener("click", () => {
//   dropdown.classList.toggle("show");
// });

// /*
// Step 3: Define function to update selected count and total
// */

// function updateSelectedCount() {
//   // Get all selected seats
//   const selectedSeats = document.querySelectorAll(".row .seat.selected");

//   // Get an array of selected seats' indexes
//   const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

//   // Store selected seats index into local storage
//   localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

//   // Calculate selected seats count
//   const selectedSeatsCount = selectedSeats.length;

//   // Update UI with selected seats count and total price
//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;

//   setMovieData(movieSelect.selectedIndex, movieSelect.value);
// }

// /*
// Step 4: Define function to set selected movie data in local storage
// */
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
//   localStorage.setItem("selectedMoviePrice", moviePrice);
// }

// /*
// Step 5: Define function to populate UI with local storage data
// */
// // Function to populate UI from local storage data

// function populateUI() {
//   // Get selected seats from local storage
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//   // If there are selected seats, mark them as selected in the UI
//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

//   // Get selected movie data from local storage
//   const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

//   // If there's a selected movie index, set it in the dropdown
//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }

// /*
// Step 6: Initial setup of count, total and UI based on saved data
// */
// populateUI();

// // Initialize ticket price
// let ticketPrice = +movieSelect.value;

// updateSelectedCount();


const container = document.querySelector(".seat-map");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Modal Scripts
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const closeModalButtons = document.querySelectorAll(".close");

loginButton.addEventListener("click", () => {
  loginModal.style.display = "block";
});

signupButton.addEventListener("click", () => {
  signupModal.style.display = "block";
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  } else if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});

document.getElementById('home-link').addEventListener('click', function() {
  // Implement the logic for the main page if needed.
});

document.getElementById('movies-link').addEventListener('click', function() {
  // Redirect to the "Coming Soon" page
  window.location.href = 'coming-soon.html';
});
