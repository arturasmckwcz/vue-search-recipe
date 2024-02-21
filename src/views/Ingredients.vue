<template>
  <div v-if="data.loading">LOADING INGREDIENTS...</div>
  <div v-else>
    <div
      v-if="data.list?.length"
      class="flex flex-col gap-5 mx-auto p-8 max-w-[65ch]"
    >
      <div
        class="rounded shadow-md"
        v-for="ingredient of data.list"
        :key="ingredient.idIngredient"
      >
        <router-link
          :to="{
            name: 'byIngredient',
            params: { ingredient: ingredient.strIngredient },
          }"
        >
          <h3 class="text-xl font-bold">{{ ingredient.strIngredient }}</h3>
          <p class="text-justify">{{ ingredient.strDescription }}</p>
        </router-link>
      </div>
    </div>
    <div v-else>NO INGREDIENTS FOUND</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import store from "../store";
import { Ingredients } from "../store/types";

const data = ref<Ingredients>(store.state.ingredients);

onMounted(() => {
  if (data.value.list.length === 0) store.dispatch("loadIngredients");
});
</script>
