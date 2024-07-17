export function SearchBar(onSubmit) {
  //onSubmit ist Parameter ->wird in index.js mit fetchCharacters gecallt
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.innerHTML = `
    <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
    `;

  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const searchQuery = data.query;
    onSubmit(searchQuery);
  });
  return searchBar;
}
