import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'          


export async function getCocktailsByLetter(letter) {
  try {
        return await axios.get(
            `${URL}search.php?f=${letter}&p=2`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}
