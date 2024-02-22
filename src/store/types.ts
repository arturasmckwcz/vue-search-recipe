import { ActionContext } from "vuex/types/index.js";

export interface Meal {
  dateModified: Date | null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
}

export interface Area {
  strArea: string;
}

export interface Category {
  strCategory: string;
}
export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}
interface Loading {
  loading: boolean;
}

export interface SearchedMeals extends Loading {
  list: Meal[];
}

export interface Areas extends Loading {
  list: Area[];
}

export interface Categories extends Loading {
  list: Category[];
}
export interface Ingredients extends Loading {
  list: Ingredient[];
}

export interface State {
  mealsByKeyword: SearchedMeals;
  mealsByLetter: SearchedMeals;
  mealsByArea: SearchedMeals;
  mealsByCategory: SearchedMeals;
  mealsByIngredient: SearchedMeals;
  areas: Areas;
  categories: Categories;
  ingredients: Ingredients;
}

export interface Mutations {
  startSearchingByKeyword: (state: State) => void;
  finishSearchingByKeyword: (state: State) => void;
  setSearchedByKeyword: (state: State, list: Meal[]) => void;
  startSearchingByLetter: (state: State) => void;
  finishSearchingByLetter: (state: State) => void;
  setSearchedByLetter: (state: State, list: Meal[]) => void;
  startSearchingByArea: (state: State) => void;
  finishSearchingByArea: (state: State) => void;
  setSearchedByArea: (state: State, list: Meal[]) => void;
  startLoadingAreas: (state: State) => void;
  finishLoadingAreas: (state: State) => void;
  setAreas: (state: State, list: Area[]) => void;
  startLoadingCategories: (state: State) => void;
  finishLoadingCategories: (state: State) => void;
  setCategories: (state: State, list: Category[]) => void;
  startSearchingByCategory: (state: State) => void;
  finishSearchingByCategory: (state: State) => void;
  setSearchedByCategory: (state: State, list: Meal[]) => void;
  startLoadingIngredients: (state: State) => void;
  finishLoadingIngredients: (state: State) => void;
  setIngredients: (state: State, list: Ingredient[]) => void;
  startSearchingByIngredient: (state: State) => void;
  finishSearchingByIngredient: (state: State) => void;
  setSearchedByIngredient: (state: State, list: Meal[]) => void;
}

export interface Actions {
  searchMealsByKeyword: (
    { commit }: ActionContext<SearchedMeals, State>,
    keyword: string
  ) => void;
  searchMealsByLetter: (
    { commit }: ActionContext<SearchedMeals, State>,
    letter: string
  ) => void;
  searchMealsByArea: (
    { commit }: ActionContext<SearchedMeals, State>,
    area: string
  ) => void;
  searchMealsByCategory: (
    { commit }: ActionContext<SearchedMeals, State>,
    category: string
  ) => void;
  searchMealsByIngredient: (
    { commit }: ActionContext<SearchedMeals, State>,
    ingredient: string
  ) => void;
  loadAreas: ({ commit }: ActionContext<SearchedMeals, State>) => void;
  loadCategories: ({ commit }: ActionContext<SearchedMeals, State>) => void;
  loadIngredients: ({ commit }: ActionContext<SearchedMeals, State>) => void;
}

export interface Getters {
  getMealById: (state: State) => (id: string) => Meal | undefined;
}
