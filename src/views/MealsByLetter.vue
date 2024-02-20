<template>
  <div class="flex justify-center gap-3 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <MealsList :meals="data.meals" :loading="data.loading" />
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import { SearchedMeals } from "../store/types.ts";
import MealsList from "../components/MealsList.vue";
const letters = "ABCDEFGHIJKLMNOPRQSTUVWXYZ".split("");

const letter = ref(useRoute().params.letter);

const route = useRoute();
watch(route, () => searchMeals(letter.value as string));

const data = computed<SearchedMeals>(() => store.state.mealsByLetter);

function searchMeals(letter: string) {
  store.dispatch("searchMealsByLetter", letter);
}

onMounted(() => {
  searchMeals(letter.value as string);
});
</script>
