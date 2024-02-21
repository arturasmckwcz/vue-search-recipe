<template>
  <div v-if="data.list">
    <Header by="Category" :value="(category as string)" />
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

const category = computed(() => useRoute().params.category);

const data = computed<SearchedMeals>(() => store.state.mealsByCategory);

onMounted(() => {
  store.dispatch("searchMealsByCategory", category.value);
});
</script>
