import { ActionContext } from "vuex";

import axiosClient from "../axiosClient.ts";
import { State } from "./types.ts";
import { capitalize } from "../utils";

function searchMeals(
  commit: ActionContext<State, State>["commit"],
  param: string,
  value: string
) {
  const mapParamToBy = {
    Keyword: { mutationPostfix: "Keyword", url: "search.php?s=" },
    Letter: { mutationPostfix: "Letter", url: "search.php?f=" },
    Area: { mutationPostfix: "Area", url: "filter.php?a=" },
    Category: { mutationPostfix: "Category", url: "filter.php?c=" },
    Ingredient: { mutationPostfix: "Ingredient", url: "filter.php?i=" },
  };
  const by = capitalize<keyof typeof mapParamToBy>(param);

  if (!value) return;
  commit(`startSearchingBy${mapParamToBy[by].mutationPostfix}`);
  axiosClient
    .get(`${mapParamToBy[by].url}${value}`)
    .then(({ data }) => {
      if (mapParamToBy[by].url.includes("filter.php")) {
        const list = [];
        for (const meal of data.meals) {
          list.push(
            axiosClient
              .get(`lookup.php?i=${meal.idMeal}`)
              .then(({ data }) => data.meals[0])
              .catch(console.error)
          );
        }
        Promise.all(list).then((list) => {
          commit(`setSearchedBy${mapParamToBy[by].mutationPostfix}`, list);
        });
      } else {
        commit(`setSearchedBy${mapParamToBy[by].mutationPostfix}`, data.meals);
      }
    })
    .catch(console.error)
    .finally(() => {
      commit(`finishSearchingBy${mapParamToBy[by].mutationPostfix}`);
    });
}

function searchMealsByKeyword(
  { commit }: ActionContext<State, State>,
  keyword: string
) {
  searchMeals(commit, "keyword", keyword);
}

function searchMealsByLetter(
  { commit }: ActionContext<State, State>,
  letter: string
) {
  searchMeals(commit, "letter", letter);
}

function searchMealsByArea(
  { commit }: ActionContext<State, State>,
  area: string
) {
  searchMeals(commit, "area", area);
}

function searchMealsByCategory(
  { commit }: ActionContext<State, State>,
  category: string
) {
  searchMeals(commit, "category", category);
}

function searchMealsByIngredient(
  { commit }: ActionContext<State, State>,
  ingredient: string
) {
  searchMeals(commit, "ingredient", ingredient);
}
// TODO: re-type to what: ACIs
function load(commit: ActionContext<State, State>["commit"], what: string) {
  const mapParamToBy = {
    Areas: { mutationPostfix: "Areas", url: "list.php?a=list" },
    Categories: { mutationPostfix: "Categories", url: "list.php?c=list" },
    Ingredients: { mutationPostfix: "Ingredients", url: "list.php?i=list" },
  };
  const by = capitalize<keyof typeof mapParamToBy>(what);

  commit(`startLoading${mapParamToBy[by].mutationPostfix}`);
  axiosClient
    .get(mapParamToBy[by].url)
    .then(({ data }) => {
      commit(`set${mapParamToBy[by].mutationPostfix}`, data.meals);
    })
    .catch(console.error)
    .finally(() => {
      commit(`finishLoading${mapParamToBy[by].mutationPostfix}`);
    });
}

function loadAreas({ commit }: ActionContext<State, State>) {
  load(commit, "Areas");
}

function loadCategories({ commit }: ActionContext<State, State>) {
  load(commit, "Categories");
}

function loadIngredients({ commit }: ActionContext<State, State>) {
  load(commit, "Ingredients");
}
export default {
  searchMealsByKeyword,
  searchMealsByLetter,
  searchMealsByArea,
  searchMealsByCategory,
  searchMealsByIngredient,
  loadAreas,
  loadCategories,
  loadIngredients,
};
