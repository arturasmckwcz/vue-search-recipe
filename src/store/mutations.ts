import { State, Meal, Ingredient, Area, Category } from "./types";

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

export function startSearchingByArea(state: State) {
  state.mealsByArea.loading = true;
}

export function finishSearchingByArea(state: State) {
  state.mealsByArea.loading = false;
}

export function setSearchedByArea(state: State, list: Meal[]) {
  state.mealsByArea.list = list;
}

export function startLoadingAreas(state: State) {
  state.areas.loading = true;
}

export function finishLoadingAreas(state: State) {
  state.areas.loading = false;
}

export function setAreas(state: State, list: Area[]) {
  state.areas.list = list;
}

export function startLoadingCategories(state: State) {
  state.categories.loading = true;
}

export function finishLoadingCategories(state: State) {
  state.categories.loading = false;
}

export function setCategories(state: State, list: Category[]) {
  state.categories.list = list;
}

export function startSearchingByCategory(state: State) {
  state.mealsByCategory.loading = true;
}

export function finishSearchingByCategory(state: State) {
  state.mealsByCategory.loading = false;
}

export function setSearchedByCategory(state: State, list: Meal[]) {
  state.mealsByCategory.list = list;
}

export function startLoadingIngredients(state: State) {
  state.ingredients.loading = true;
}

export function finishLoadingIngredients(state: State) {
  state.ingredients.loading = false;
}

export function setIngredients(state: State, list: Ingredient[]) {
  state.ingredients.list = list;
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
