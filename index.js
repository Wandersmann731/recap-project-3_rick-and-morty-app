import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

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
let page = 1;
// let searchQuery;

export const url = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(query = "") {
  const searchQuery = `?name=${query}`;
  const response = await fetch(url + searchQuery);

  const data = await response.json();

  cardContainer.innerHTML = "";

  data.results.forEach((element) => {
    const characterCard = CharacterCard(
      element.image,
      element.name,
      element.status,
      element.species,
      element.episode.length
    );
    cardContainer.append(characterCard);
  });
}

fetchCharacters();

searchBarContainer.append(SearchBar(fetchCharacters));
