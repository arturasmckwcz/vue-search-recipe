import { Meal, State } from "./types";

export default {
  getMealById:
    (state: State) =>
    (id: string): Meal | undefined => {
      const meal = [
        ...state.mealsByKeyword.meals,
        ...state.mealsByLetter.meals,
        ...state.mealsByIngredient.meals,
      ].find(({ idMeal }) => {
        return idMeal === id;
      });
      return meal || ({} as Meal);
    },
};
