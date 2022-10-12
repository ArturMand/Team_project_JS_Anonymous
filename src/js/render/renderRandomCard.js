import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'    


export async function getRandomCocktail() {
    try {
      let arr = [];
      if (window.screen.width < 768) {
        for (let i = 0; i < 3; i += 1) {
          const cocktail = await axios.get(`${URL}random.php`)
              .then(response => { return response.data });;
          arr.push(cocktail);
          
      }
      } else if (window.screen.width > 768 && window.screen.width < 1280) {
        for (let i = 0; i < 6; i += 1) {
          const cocktail = await axios.get(`${URL}random.php`)
              .then(response => { return response.data });;
          arr.push(cocktail);
          
      }
      } else {
        for (let i = 0; i < 9; i += 1) {
          const cocktail = await axios.get(`${URL}random.php`)
              .then(response => { return response.data });;
          arr.push(cocktail);      
        }     
      }
        const promiseArr = Promise.all(arr)
            .then(response => { return response });
        return promiseArr;
        
    } catch (error) {
      throw new Error(error);
    }
}