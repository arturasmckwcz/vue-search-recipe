import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import MealsByKeyword from "../views/MealsByKeyword.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealDetails from "../views/MealDetails.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Areas from "../views/Areas.vue";
import Categories from "../views/Categories.vue";
import Ingredients from "../views/Ingredients.vue";
import MealsByACI from "../views/MealsByACI.vue";

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
        path: "/categories",
        name: "categories",
        component: Categories,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-aci/:aci/:payload",
        name: "byACI",
        component: MealsByACI,
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
