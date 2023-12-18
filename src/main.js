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
  const id =  response.id;
  const name = response.forms[0].name;
  const img = response.sprites.front_default;

  let div = document.createElement('div');
  div.innerHTML = `
    <img src="${img}" alt="imagen_pokemon_${name}">
    <p>Numero: ${id}</p>
    <p>Nombre: ${name}</p>
  `

  pokesec.appendChild(div); 
  
  return console.log(img, id, name, div)
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