<template>
  <div v-if="data.list">
    <Header by="Area" :value="(area as string)" />
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

const area = computed(() => useRoute().params.area);

const data = computed<SearchedMeals>(() => store.state.mealsByArea);

onMounted(() => {
  store.dispatch("searchMealsByArea", area.value);
});
</script>
