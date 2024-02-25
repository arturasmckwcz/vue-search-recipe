<template>
  <div class="flex justify-center gap-3 py-2 bg-white shadow-md">
    <router-link
      class="hover:text-blue-600 hover:font-bold"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div v-if="letter">
    <Header by="Letter" :value="(letter as string)" />
    <MealsList :list="data.list" :loading="data.loading" />
  </div>
</template>

<script setup lang="ts">
import { watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useStore } from "../store";
import { SearchedMeals } from "../store/types.ts";
import MealsList from "../components/MealsList.vue";
import Header from "../components/MealsHeader.vue";
const letters = "ABCDEFGHIJKLMNOPRQSTUVWXYZ".split("");

const route = useRoute();
watch(route, () => searchMeals(letter.value as string));

const letter = computed(() => route.params.letter);
const store = useStore();
const data = computed<SearchedMeals>(() => store.state.mealsByLetter);

function searchMeals(letter: string) {
  store.dispatch("searchMealsByLetter", letter);
}

onMounted(() => {
  if (letter.value) searchMeals(letter.value as string);
});
</script>
