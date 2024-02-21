import { State } from "./types";

const content = {
  loading: false,
  list: [],
};
const state: State = {
  mealsByKeyword: {
    ...content,
  },
  mealsByLetter: {
    ...content,
  },
  areas: {
    ...content,
  },
  mealsByArea: {
    ...content,
  },
  categories: {
    ...content,
  },
  mealsByCategory: {
    ...content,
  },
  ingredients: {
    ...content,
  },
  mealsByIngredient: {
    ...content,
  },
};

export default state;
