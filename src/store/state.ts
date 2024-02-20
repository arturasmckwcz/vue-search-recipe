import { State } from "./types";

const state: State = {
  mealsByKeyword: {
    loading: false,
    meals: [],
  },
  mealsByLetter: {
    loading: false,
    meals: [],
  },
  mealsByIngredient: {
    loading: false,
    meals: [],
  },
};

export default state;
