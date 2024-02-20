import { State } from "./types";

const state: State = {
  mealsByKeyword: {
    loading: false,
    list: [],
  },
  mealsByLetter: {
    loading: false,
    list: [],
  },
  mealsByIngredient: {
    loading: false,
    list: [],
  },
  ingredients: {
    loading: false,
    list: [],
  },
};

export default state;
