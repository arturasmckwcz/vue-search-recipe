<template>
  <div class="flex flex-col p-8">
    <div>
      <input
        type="text"
        class="rounded border-gray-200 w-full"
        placeholder="Search for meals"
      />
    </div>
    <div class="flex justify-center gap-3 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import axiosClient from "../axiosClient";
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPRQSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(() => {
  axiosClient
    .get("list.php?i=list")
    .then((response) => {
      ingredients.value = response.data;
    })
    .catch(console.error);
});
</script>
