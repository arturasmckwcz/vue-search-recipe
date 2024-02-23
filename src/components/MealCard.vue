<template>
  <div class="flex flex-col bg-white shadow-lg rounded-md p-3">
    <v-tooltip location="top" :text="meal.strMeal" :disabled="!truncated">
      <template v-slot:activator="{ props }">
        <span class="font-bold text-xl" v-bind="props">{{
          truncated ? truncated : meal.strMeal
        }}</span>
      </template>
    </v-tooltip>

    <p class="grid grid-cols-2 grid-justify-end">
      <span class="text-left text">{{ meal.strArea }}</span>
      <span class="text-right">{{ meal.strCategory }}</span>
    </p>
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img class="rounded" :src="meal.strMealThumb" :alt="meal.strMeal" />
    </router-link>
    <ButtonYT :href="meal.strYoutube" size="xs">Watch how to cook</ButtonYT>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ButtonYT from "./ButtonYT.vue";
import { Meal } from "../store/types";
import { getTruncated } from "../utils";

const { meal } = defineProps({
  meal: Object,
}) as { meal: Meal };

const maxLength = 18;
const truncated = computed(() =>
  meal.strMeal.length > maxLength ? getTruncated(meal.strMeal, maxLength) : null
);
</script>
