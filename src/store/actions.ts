import { ActionContext } from "vuex";

import axiosClient from "../axiosClient.ts";
import { SearchedMeals, State } from "./types.ts";
import { capitalize } from "../utils";

function searchMeals(
  commit: ActionContext<SearchedMeals, State>["commit"],
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
  const by = capitalize<typeof mapParamToBy>(param);

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
          console.debug("actions:searchMeals:list", list);
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

export function searchMealsByKeyword(
  { commit }: ActionContext<SearchedMeals, State>,
  keyword: string
) {
  searchMeals(commit, "keyword", keyword);
}

export function searchMealsByLetter(
  { commit }: ActionContext<SearchedMeals, State>,
  letter: string
) {
  searchMeals(commit, "letter", letter);
}

export function searchMealsByArea(
  { commit }: ActionContext<SearchedMeals, State>,
  area: string
) {
  searchMeals(commit, "area", area);
}

export function searchMealsByCategory(
  { commit }: ActionContext<SearchedMeals, State>,
  category: string
) {
  searchMeals(commit, "category", category);
}

export function searchMealsByIngredient(
  { commit }: ActionContext<SearchedMeals, State>,
  ingredient: string
) {
  searchMeals(commit, "ingredient", ingredient);
}

function load(
  commit: ActionContext<SearchedMeals, State>["commit"],
  what: string
) {
  const mapParamToBy = {
    Areas: { mutationPostfix: "Areas", url: "list.php?a=list" },
    Categories: { mutationPostfix: "Categories", url: "list.php?c=list" },
    Ingredients: { mutationPostfix: "Ingredients", url: "list.php?i=list" },
  };
  const by = capitalize<typeof mapParamToBy>(what);

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

export function loadAreas({ commit }: ActionContext<SearchedMeals, State>) {
  load(commit, "Areas");
}

export function loadCategories({
  commit,
}: ActionContext<SearchedMeals, State>) {
  load(commit, "Categories");
}

export function loadIngredients({
  commit,
}: ActionContext<SearchedMeals, State>) {
  load(commit, "Ingredients");
}
