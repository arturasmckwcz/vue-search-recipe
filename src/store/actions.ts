import { ActionContext } from "vuex";

import axiosClient from "../axiosClient.ts";
import { SearchedMeals, State } from "./types.ts";

function searchMeals(
  commit: ActionContext<SearchedMeals, State>["commit"],
  param: string,
  value: string
) {
  const mapParamToBy = {
    Keyword: { mutationPostfix: "Keyword", url: "search.php?s=" },
    Letter: { mutationPostfix: "Letter", url: "search.php?f=" },
    Ingredient: { mutationPostfix: "Ingredient", url: "filter.php?i=" },
  };
  const by = (param[0].toUpperCase() +
    param.slice(1)) as keyof typeof mapParamToBy;
  if (!value) return;
  commit(`startSearchingBy${mapParamToBy[by].mutationPostfix}`);
  axiosClient
    .get(`${mapParamToBy[by].url}${value}`)
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
}

export function searchMealsByLetter(
  { commit }: ActionContext<SearchedMeals, State>,
  letter: string
) {
  searchMeals(commit, "letter", letter);
}

export function loadIngredients({
  commit,
}: ActionContext<SearchedMeals, State>) {
  commit("startLoadingIngredients");
  axiosClient
    .get("list.php?i=list")
    .then(({ data }) => commit("setIngredients", data.meals))
    .catch(console.error)
    .finally(() => commit("finishLoadingIngredients"));
}
