<template>
  <div v-if="data.list">
    <Header :by="capitalize(aci as string)" :value="(payload as string)" />
    <MealsList :list="data.list" :loading="data.loading" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import MealsList from "../components/MealsList.vue";
import Header from "../components/MealsHeader.vue";
import { SearchedMeals, State } from "../store/types";
import { capitalize } from "../utils";
const mealsBy = {
  area: "mealsByArea",
  category: "mealsByCategory",
  ingredient: "mealsByIngredient",
};

const route = useRoute();
const aci = computed(() => route.params.aci);
const payload = computed(() => route.params.payload);
const data = computed<SearchedMeals>(
  () => store.state[mealsBy[aci.value]] as SearchedMeals
);

onMounted(() => {
  store.dispatch(
    `searchMealsBy${capitalize(aci.value as string)}`,
    payload.value
  );
});
</script>
