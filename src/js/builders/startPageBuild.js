import { randomCardBuilder } from "./cardBuilderRandom";
import { getRandomCocktail } from "../fetch/fetchRandomCard";

export function startPageBuild() {
    getRandomCocktail()
        .then(randomCardBuilder)
        .catch(error => { console.log(error); });
}