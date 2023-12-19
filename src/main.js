import {llamadaPokeAPI} from "./api.js";

let pokesec= document.querySelector('.pokemons');
let pokeSearch = document.querySelector('.poke-search');
let pokeText = document.querySelector('.poke-text');


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
  
  let pokediv = document.querySelector(".pokemones__poke");
  let pokehistory = document.querySelector(".pokemons__history");
  let pokedivhistory = document.createElement("div");
  let PokeStructure = `
    <img src="${img}" alt="imagen_pokemon_${name}" class="poke__img">
    <p>Numero: ${id}</p>
    <p>Nombre: ${name}</p>
    <p>Height: ${height}</p>
    <p>Weight: ${weight}</p>
  `  
  pokediv.innerHTML = PokeStructure;
  pokedivhistory.innerHTML = PokeStructure;

  pokehistory.appendChild(pokedivhistory);
  return ; 
}


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