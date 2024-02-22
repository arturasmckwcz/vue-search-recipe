<template>
  <div v-if="data.list">
    <Header :by="capitalize(aci as string)" :value="(payload as string)" />
    <MealsList :list="data.list" :loading="data.loading" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useStore } from "../store";
import MealsList from "../components/MealsList.vue";
import Header from "../components/MealsHeader.vue";
import { ACIs, SearchedMeals } from "../store/types";
import { capitalize } from "../utils";

const route = useRoute();
const aci = computed<ACIs>(() => route.params.aci as ACIs);
const payload = computed(() => route.params.payload);
const store = useStore();
const data = computed<SearchedMeals>(
  () => store.getters.getMealsByACI(aci.value) as SearchedMeals
);

onMounted(() => {
  store.dispatch(
    `searchMealsBy${capitalize(aci.value as string)}`,
    payload.value
  );
});
</script>
