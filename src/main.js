import {llamadaPokeAPI} from "./api.js";

let pokesec= document.querySelector('.pokedex__container');
let pokeText = document.querySelector('.search__form--text');
let pokeSearch = document.querySelector('.search__form--submit');
let pokehistory = document.querySelector(".pokedex__pokes");
let sectionHistory = document.querySelector(".pokedex__history");

pokeSearch.addEventListener('click', (e) => {
  e.preventDefault();
  let pokeName = pokeText.value;
  printPokes(pokeName);
});

async function printPokes (poke){
  const response = await llamadaPokeAPI(poke);
  const {id, weight, height} = response;
  const name = response.forms[0].name;
  const img = response.sprites.other["official-artwork"].front_default;
  
  //PONER POKEMON EN LA WEB
  let pokediv = document.querySelector(".pokedex__pokemon");
  let pokeStructure = `
    <img src="${img}" alt="imagen_pokemon_${name}" class="pokedex__img">
    <div class="pokedex__info">
      <p>Numero: ${id}</p>
      <p>Nombre: ${name}</p>
      <p>Height: ${height}</p>
      <p>Weight: ${weight}</p>
    </div>
  `  
  pokediv.innerHTML = pokeStructure;

  //CREAR HISTORIAL DE POKEMONS BUSCADOS
  let pokeDivHistory = document.createElement("div");
  let pokeStructure2 = `
    <img src="${img}" alt="imagen_pokemon_${name}" class="pokedex__history--pokes">
    <div> 
      <p>Numero: ${id}</p>
      <p>Nombre: ${name}</p>
    </div>
  `  
  pokeDivHistory.setAttribute("class", "pokedex__history--div")
  pokeDivHistory.innerHTML = pokeStructure2;

  pokehistory.appendChild(pokeDivHistory);
  return
}

let iconClose = document.querySelector(".pokedex__history--icon");

iconClose.addEventListener("click", () => {
  sectionHistory.classList.add("ocultar")
  setTimeout(() => {
    sectionHistory.classList.add("ocultar2")
  }, 1000)
})
// Escibir 20 pokemons RANDOM 

// async function printPokes (poke){
//   const response = await llamadaPokeAPI(poke);
//   const pokemons = response.results;

//   for (let i = 0; i < pokemons.length; i++) {
//     let p = document.createElement('p');
//     p.innerText = pokemons[i].name;
    
//     pokesec.appendChild(p);
//   }  
// }