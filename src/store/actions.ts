import { ActionContext } from "vuex";

import axiosClient from "../axiosClient.ts";
import { SearchedMeals, State } from "./types.ts";

function searchMeals(
  commit: ActionContext<SearchedMeals, State>["commit"],
  param: string,
  value: string
) {
  const mapParamToBy = {
    Keyword: { mutationPostfix: "Keyword", searchParam: "s" },
    Letter: { mutationPostfix: "Letter", searchParam: "f" },
    Ingredient: { mutationPostfix: "Ingredient", searchParam: "i" },
  };
  const by = param[0].toUpperCase() + param.slice(1);
  if (!value) return;
  commit(`startSearchingBy${mapParamToBy[by].mutationPostfix}`);
  axiosClient
    .get(`search.php?${mapParamToBy[by].searchParam}=${value}`)
    .then(({ data }) => {
      commit(`setSearchedBy${mapParamToBy[by].mutationPostfix}`, data.meals);
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

  // if (!keyword) return;
  // commit("startSearchingByKeyword");
  // axiosClient
  //   .get(`search.php?s=${keyword}`)
  //   .then(({ data }) => commit("setSearchedByKeyword", data.meals))
  //   .catch(console.error)
  //   .finally(() => commit("finishSearchingByKeyword"));
}

export function searchMealsByLetter(
  { commit }: ActionContext<SearchedMeals, State>,
  letter: string
) {
  searchMeals(commit, "letter", letter);

  // if (!letter) return;
  // commit("startSearchingByLetter");
  // console.debug("actions:searchMealsByLetter:letter", letter);
  // axiosClient
  //   .get(`search.php?f=${letter}`)
  //   .then(({ data }) => commit("setSearchedByLetter", data.meals))
  //   .catch(console.error)
  //   .finally(() => commit("finishSearchingByLetter"));
}

export function searchMealsByIngredient(
  { commit }: ActionContext<SearchedMeals, State>,
  ingredient: string
) {
  searchMeals(commit, "ingredient", ingredient);

  // if (!ingredient) return;
  // commit("startSearchingByIngredient");
  // axiosClient
  //   .get(`search.php?i=${ingredient}`)
  //   .then(({ data }) => commit("setSearchedByIngredient", data.meals))
  //   .catch(console.error)
  //   .finally(() => commit("finishSearchingByIngredient"));
}
