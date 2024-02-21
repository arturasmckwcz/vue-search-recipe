<template>
  <div class="p-8 flex flex-col">
    <input
      class="shadow-md rounded"
      v-model="keyword"
      @change="searchMeals"
      placeholder="Search meals"
    />
  </div>
  <MealsList v-if="showList" :list="data.list" :loading="data.loading" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import { SearchedMeals } from "../store/types";
import MealsList from "../components/MealsList.vue";

const route = useRoute();
const keyword = ref("");
const showList = ref(false);
const data = computed<SearchedMeals>(() => store.state.mealsByKeyword);

function searchMeals() {
  store.dispatch("searchMealsByKeyword", keyword.value);
  showList.value = true;
}

onMounted(() => {
  keyword.value = route.params.keyword as string;

  if (keyword.value) {
    searchMeals();
  }
});
</script>
