import { CharacterCard } from "./CharacterCard.js"; // js folgt

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const apiEndpointUrl = "https://rickandmortyapi.com/api/character?page=1";

  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  );

  const data = await response.json();
}

export {
  cardContainer,
  searchBarContainer,
  searchBar,
  navigation,
  prevButton,
  nextButton,
  pagination,
  maxPage,
  page,
  searchQuery,
};
