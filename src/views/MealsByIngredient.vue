<template>
  <div v-if="data.list">
    <Header by="Ingredient" :value="(ingredient as string)" />
    <MealsList :list="data.list" :loading="data.loading" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import MealsList from "../components/MealsList.vue";
import Header from "../components/MealsHeader.vue";
import { SearchedMeals } from "../store/types";

const ingredient = computed(() => useRoute().params.ingredient);

const data = computed<SearchedMeals>(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", ingredient.value);
});
</script>
