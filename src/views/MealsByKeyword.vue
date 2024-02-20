<template>
  <div class="p-8">
    <v-text-field
      variant="outlined"
      v-model="keyword"
      @change="searchMeals"
      placeholder="Search meals"
    />
  </div>
  <MealsList :meals="data.list" :loading="data.loading" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import { SearchedMeals } from "../store/types";
import MealsList from "../components/MealsList.vue";

const route = useRoute();
const keyword = ref("");
const data = computed<SearchedMeals>(() => store.state.mealsByKeyword);

function searchMeals() {
  store.dispatch("searchMealsByKeyword", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.keyword as string;

  if (keyword.value) {
    searchMeals();
  }
});
</script>
