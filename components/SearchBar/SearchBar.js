//what we need
// submit event listener on search Bar
// search query update with current text inside when event is triggered
// search bar = form
import {
  cardContainer,
  searchBarContainer,
  searchBar,
  searchQuery,
} from "./index.js";

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("hi");
});

console.log("hi");
