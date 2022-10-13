import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'          


export async function getIngridient(ingrName) {
  try {
        return await axios.get(
            `${URL}search.php?i=${ingrName}`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}