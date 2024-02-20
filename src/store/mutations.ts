import { State, Meal } from "./types";

export function startSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = true;
}

export function finishSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = false;
}

export function setSearchedByKeyword(state: State, meals: Meal[]) {
  state.mealsByKeyword.meals = meals;
}

export function startSearchingByLetter(state: State) {
  state.mealsByLetter.loading = true;
}

export function finishSearchingByLetter(state: State) {
  state.mealsByLetter.loading = false;
}

export function setSearchedByLetter(state: State, meals: Meal[]) {
  state.mealsByLetter.meals = meals;
}

export function startSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = true;
}

export function finishSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = false;
}

export function setSearchedByIngredient(state: State, meals: Meal[]) {
  state.mealsByIngredient.meals = meals;
}
