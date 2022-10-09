import axios from "axios";
const URL = 'https://thecocktaildb.com/api/json/v1/1/'          



export function getCocktailsByLetter(letter) {
  try {
        return axios.get(
            `${URL}search.php?f=${letter}`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}

export function getCocktailByWord(word) {
  try {
        return axios.get(
            `${URL}search.php?s=${word}`
            ).then(response => { return response.data })
    
  } catch (error) {
    console.error(error);
  }
}


export function getRandomCocktail() {
    try {
      let arr = [];
      if (window.screen.width < 768) {
        for (let i = 0; i < 3; i += 1) {
          const cocktail = axios.get(`${URL}random.php`)
              .then(response => { return response.data });;
          arr.push(cocktail);
          
      }
      } else if (window.screen.width > 768 && window.screen.width < 1280) {
        for (let i = 0; i < 6; i += 1) {
          const cocktail = axios.get(`${URL}random.php`)
              .then(response => { return response.data });;
          arr.push(cocktail);
          
      }
      } else {
        for (let i = 0; i < 9; i += 1) {
          const cocktail = axios.get(`${URL}random.php`)
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