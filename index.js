import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
//test
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
const maxPage = 42;
let page;
let searchQuery;

export const apiEndpointUrl = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(url) {
  const response = await fetch(url);

  const data = await response.json();
  console.log(data);

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

fetchCharacters(apiEndpointUrl);

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
