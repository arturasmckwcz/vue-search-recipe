import { ACIs, Meal, SearchedMeals, State } from "./types";

const mealsBy: Record<ACIs, keyof State> = {
  area: "mealsByArea",
  category: "mealsByCategory",
  ingredient: "mealsByIngredient",
};

const getters = {
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

  getMealsByACI:
    (state: State) =>
    (aci: ACIs): SearchedMeals => {
      return state[mealsBy[aci] as keyof State] as SearchedMeals;
    },
};
export default getters;
