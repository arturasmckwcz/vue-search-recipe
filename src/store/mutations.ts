import { State, Meal, Ingredient } from "./types";

export function startSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = true;
}

export function finishSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = false;
}

export function setSearchedByKeyword(state: State, list: Meal[]) {
  state.mealsByKeyword.list = list;
}

export function startSearchingByLetter(state: State) {
  state.mealsByLetter.loading = true;
}

export function finishSearchingByLetter(state: State) {
  state.mealsByLetter.loading = false;
}

export function setSearchedByLetter(state: State, list: Meal[]) {
  state.mealsByLetter.list = list;
}

export function startSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = true;
}

export function finishSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = false;
}

export function setSearchedByIngredient(state: State, list: Meal[]) {
  state.mealsByIngredient.list = list;
}

export function startLoadingIngredients(state: State) {
  state.mealsByIngredient.loading = true;
}

export function finishLoadingIngredients(state: State) {
  state.mealsByIngredient.loading = false;
}

export function setIngredients(state: State, list: Ingredient[]) {
  state.ingredients.list = list;
}
