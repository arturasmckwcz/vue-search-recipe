<template>
  <Loading v-if="loading">MEAL DETAILS</Loading>
  <div
    v-else-if="meal"
    class="flex flex-col gap-3 max-w-[72ch] mx-auto p-16 bg-white shadow-lg rounded-lg"
  >
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
      <span class="inline-block text-lg"><strong>Instructions</strong></span>
      <span class="inline-block ml-5"
        ><ButtonYT :href="meal.strYoutube" size="xs" />
      </span>
      <p
        v-for="para of getParas(meal.strInstructions)"
        class="mb-1 text-justify"
      >
        {{ para }}
      </p>
    </div>
    <div class="grid grid-cols-2">
      <span class="text-right mr-2"><strong>Ingredients</strong></span>
      <span class=""><strong>Measures</strong></span>
      <span class="text-right mr-2">
        <div v-for="(_, i) of new Array(20)">
          {{ meal[`strIngredient${i + 1}` as keyof Meal] }}
        </div>
      </span>
      <span class="">
        <div v-for="(_, i) of new Array(20)">
          {{ meal[`strMeasure${i + 1}` as keyof Meal] }}
        </div>
      </span>
    </div>
  </div>
  <NotFound v-else>MEAL</NotFound>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { useStore } from "../store";
import ButtonYT from "../components/ButtonYT.vue";
import Loading from "../components/Loading.vue";
import NotFound from "../components/NotFound.vue";
import axiosClient from "../axiosClient";
import { Meal } from "../store/types";
import { getParas } from "../utils";

const id = useRoute().params.id as string;
const store = useStore();

const meal = ref<Meal | undefined>(store.getters.getMealById(id));
const loading = ref(false);

onMounted(() => {
  if (!meal.value) {
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
