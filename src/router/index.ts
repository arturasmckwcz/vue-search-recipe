import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import MealsByKeyword from "../views/MealsByKeyword.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealDetails from "../views/MealDetails.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Areas from "../views/Areas.vue";
import MealsByArea from "../views/MealsByArea.vue";
import Categories from "../views/Categories.vue";
import MealsByCategory from "../views/MealsByCategory.vue";
import Ingredients from "../views/Ingredients.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: MealsByKeyword,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: "/areas",
        name: "areas",
        component: Areas,
      },
      {
        path: "/by-area/:area?",
        name: "byArea",
        component: MealsByArea,
      },
      {
        path: "/categories",
        name: "categories",
        component: Categories,
      },
      {
        path: "/by-category/:category?",
        name: "byCategory",
        component: MealsByCategory,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },
  { path: "/guest", component: GuestLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
