<template>
  <div v-if="loading">LOADING...</div>
  <div v-else-if="meal.idMeal" class="flex flex-col max-w-[64em] mx-auto p-16">
    <a :href="meal.strSource" target="_blanc">
      <h1
        class="inline text-4xl font-bold after:content-['🕸️'] after:text-xs after:align-text-top"
      >
        {{ meal.strMeal }}
      </h1>
    </a>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-3 xm:grid-cols-2">
      <span>
        <span class="text-right mr-1"><strong>Area:</strong></span>
        <span>{{ meal.strArea }}</span>
      </span>
      <span>
        <span class="text-right mr-1"><strong>Category:</strong></span>
        <span>{{ meal.strCategory }}</span>
      </span>
      <span class="flex items-start">
        <span class="text-right mr-1"><strong>Tags:</strong></span>
        <span>
          <div v-for="tag of meal?.strTags?.split(',')">{{ tag }}</div>
        </span>
      </span>
    </div>
    <div>
      <span class="inline-block text-lg"><strong>Instuctions</strong></span>
      <span class="inline-block ml-5"
        ><ButtonYT :href="meal.strYoutube" size="xs">Watch</ButtonYT></span
      >
      <p class="text-justify">{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-2">
      <span class="text-right mr-2"><strong>Ingedients</strong></span>
      <span class=""><strong>Measures</strong></span>
      <span class="text-right mr-2">
        <div v-for="(_, i) of new Array(20)">
          {{ meal[`strIngredient${i + 1}`] }}
        </div>
      </span>
      <span class="">
        <div v-for="(_, i) of new Array(20)">
          {{ meal[`strMeasure${i + 1}`] }}
        </div>
      </span>
    </div>
  </div>
  <div v-else>MEAL NOT FOUND</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import ButtonYT from "../components/ButtonYT.vue";
import axiosClient from "../axiosClient";
import { Meal } from "../store/types";

const id = useRoute().params.id as string;
console.debug("MealDetails:id", id);

const meal = ref<Meal>(store.getters.getMealById(id));
const loading = ref(false);

onMounted(() => {
  console.debug("MealDetails:onMounted:meal", meal.value);
  if (!Object.keys(meal.value).length) {
    loading.value = true;
    axiosClient
      .get(`lookup.php?i=${id}`)
      .then(({ data }) => {
        meal.value = data.meals[0];
      })
      .catch(console.error)
      .finally(() => {
        loading.value = false;
      });
  }
});
</script>
