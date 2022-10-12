import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'   


export async function getInfo(id) {
  try {
        return await axios.get(
            `${URL}lookup.php?i=${id}`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}