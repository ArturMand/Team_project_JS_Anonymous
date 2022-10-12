import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'          


export async function getIngridient(id) {
  try {
        return await axios.get(
            `${URL}lookup.php?iid=${id}`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}