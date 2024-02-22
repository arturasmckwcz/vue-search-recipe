import { Getters, Meal, State } from "./types";

const getters: Getters = {
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
      return meal;
    },
};
export default getters;
