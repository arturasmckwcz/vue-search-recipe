<template>
  <div v-if="data.loading">LOADING MEALS...</div>
  <div v-else>
    <div
      v-if="data.list?.length"
      class="mx-8 grid sm:grid-cols-2 justify-items-center auto-cols-fr min-w-0 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <MealCard v-for="meal of data.list" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else>NO MEALS FOUND</div>
  </div>
</template>

<script setup lang="ts">
import MealCard from "../components/MealCard.vue";
import { SearchedMeals } from "../store/types";

const data = defineProps<SearchedMeals>();
</script>
