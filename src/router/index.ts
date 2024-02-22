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

const base = import.meta.env.VITE_FE_BASE || "/";
const routes: RouteRecordRaw[] = [
  {
    path: base,
    component: DefaultLayout,
    children: [
      {
        path: base,
        name: "home",
        component: MealsByKeyword,
      },
      {
        path: base + "meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: base + "areas",
        name: "areas",
        component: Areas,
      },
      {
        path: base + "categories",
        name: "categories",
        component: Categories,
      },
      {
        path: base + "base+/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: base + "by-aci/:aci/:payload",
        name: "byACI",
        component: MealsByACI,
      },
      {
        path: base + "by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },
  { path: base + "guest", component: GuestLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
