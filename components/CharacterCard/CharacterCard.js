export function CharacterCard(
  characterImage,
  characterName,
  characterStatus,
  characterType,
  characterOccurrences
) {
  const createdList = document.createElement("li");
  createdList.classList.add("card");

  createdList.innerHTML = `
<div class="card__image-container">
    <img class="card__image" src="${characterImage}" alt"${characterName}">
    <div class="card__image-gradient"></div>
</div>
<div class="card__content">
<h2 class=" card__title">${characterName}</h2>
    <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${characterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${characterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${characterOccurrences}</dd>
    </dl>
    </div>
`;
  return createdList;
}
