<template>
  <Loading v-if="data.loading" />
  <div v-else>
    <div
      v-if="data.list?.length"
      class="grid sm:grid-cols-2 justify-items-center auto-cols-fr min-w-0 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <MealCard v-for="meal of data.list" :key="meal.idMeal" :meal="meal" />
    </div>
    <NotFound v-else />
  </div>
</template>

<script setup lang="ts">
import MealCard from "../components/MealCard.vue";
import { SearchedMeals } from "../store/types";
import Loading from "./Loading.vue";
import NotFound from "./NotFound.vue";

const data = defineProps<Partial<SearchedMeals>>();
</script>
