function createPokemonCard(pokemon) {
  let cardLi = document.createElement("li");
  cardLi.className = "card";

  let titleH2 = document.createElement("h2");
  titleH2.className = "card-title";
  titleH2.textContent = pokemon.name.toUpperCase();

  let pokeImg = document.createElement("img");
  pokeImg.width = 256;
  pokeImg.className = "card--img";
  pokeImg.src = pokemon.sprites.other["official-artwork"].front_default;

  let statsUl = document.createElement("ul");
  statsUl.className = "card--text";

  let liEl1 = document.createElement("li");
  let pEl = document.createElement("p");
  pEl.textContent = `HP: 45`;

  cardLi.append(titleH2, pokeImg);

  let cardsUl = document.querySelector(".cards");
  cardsUl.append(cardLi);
}

for (let pokemon of data) {
  createPokemonCard(pokemon);
}
