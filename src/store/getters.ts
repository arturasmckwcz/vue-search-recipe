import { Meal, State } from "./types";

export default {
  getMealById:
    (state: State) =>
    (id: string): Meal | undefined => {
      const meal = [
        ...state.mealsByKeyword.list,
        ...state.mealsByLetter.list,
        ...state.mealsByIngredient.list,
      ].find(({ idMeal }) => {
        console.debug("getters:getMealById:id,idMeal", id, idMeal);
        return idMeal === id;
      });
      return meal || ({} as Meal);
    },
};
