// REVISAR FARFETCH ESCRITURA

export async function llamadaPokeAPI (pokemon) {
  const URL = 'https://pokeapi.co/api/v2/pokemon';
  const URL_COMPLETE = `${URL}/${pokemon}`;
  console.log(URL_COMPLETE)
  
  try{
    const response = await fetch(URL_COMPLETE);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
  
}
