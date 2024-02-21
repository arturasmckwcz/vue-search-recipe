<template>
  <MealsList v-if="data.list" :list="data.list" :loading="data.loading" />
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import MealsList from "../components/MealsList.vue";
import { SearchedMeals } from "../store/types";

const ingredient = computed(() => useRoute().params.ingredient);

const data = computed<SearchedMeals>(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", ingredient.value);
});
</script>
