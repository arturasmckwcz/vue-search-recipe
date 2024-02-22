import { State, Meal, Ingredient, Area, Category, Mutations } from "./types";

function startSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = true;
}

function finishSearchingByKeyword(state: State) {
  state.mealsByKeyword.loading = false;
}

function setSearchedByKeyword(state: State, list: Meal[]) {
  state.mealsByKeyword.list = list;
}

function startSearchingByLetter(state: State) {
  state.mealsByLetter.loading = true;
}

function finishSearchingByLetter(state: State) {
  state.mealsByLetter.loading = false;
}

function setSearchedByLetter(state: State, list: Meal[]) {
  state.mealsByLetter.list = list;
}

function startSearchingByArea(state: State) {
  state.mealsByArea.loading = true;
}

function finishSearchingByArea(state: State) {
  state.mealsByArea.loading = false;
}

function setSearchedByArea(state: State, list: Meal[]) {
  state.mealsByArea.list = list;
}

function startLoadingAreas(state: State) {
  state.areas.loading = true;
}

function finishLoadingAreas(state: State) {
  state.areas.loading = false;
}

function setAreas(state: State, list: Area[]) {
  state.areas.list = list;
}

function startLoadingCategories(state: State) {
  state.categories.loading = true;
}

function finishLoadingCategories(state: State) {
  state.categories.loading = false;
}

function setCategories(state: State, list: Category[]) {
  state.categories.list = list;
}

function startSearchingByCategory(state: State) {
  state.mealsByCategory.loading = true;
}

function finishSearchingByCategory(state: State) {
  state.mealsByCategory.loading = false;
}

function setSearchedByCategory(state: State, list: Meal[]) {
  state.mealsByCategory.list = list;
}

function startLoadingIngredients(state: State) {
  state.ingredients.loading = true;
}

function finishLoadingIngredients(state: State) {
  state.ingredients.loading = false;
}

function setIngredients(state: State, list: Ingredient[]) {
  state.ingredients.list = list;
}

function startSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = true;
}

function finishSearchingByIngredient(state: State) {
  state.mealsByIngredient.loading = false;
}

function setSearchedByIngredient(state: State, list: Meal[]) {
  state.mealsByIngredient.list = list;
}

export default {
  startSearchingByKeyword,
  finishSearchingByKeyword,
  setSearchedByKeyword,
  startSearchingByLetter,
  finishSearchingByLetter,
  setSearchedByLetter,
  startSearchingByArea,
  finishSearchingByArea,
  setSearchedByArea,
  startLoadingAreas,
  finishLoadingAreas,
  setAreas,
  startLoadingCategories,
  finishLoadingCategories,
  setCategories,
  startSearchingByCategory,
  finishSearchingByCategory,
  setSearchedByCategory,
  startLoadingIngredients,
  finishLoadingIngredients,
  setIngredients,
  startSearchingByIngredient,
  finishSearchingByIngredient,
  setSearchedByIngredient,
};
