<template>
  <Loading v-if="data.loading">INGREDIENTS</Loading>
  <div v-else>
    <div
      v-if="data.list?.length"
      class="flex flex-col gap-5 mx-auto px-8 max-w-[65ch]"
    >
      <input
        class="rounded shadow-md"
        v-model="keyword"
        placeholder="Search ingredients"
      />
      <div
        class="rounded bg-white shadow-md p-4"
        v-for="ingredient of filteredIngredients"
        :key="ingredient.idIngredient"
      >
        <router-link
          :to="{
            name: 'byACI',
            params: { aci: 'ingredient', payload: ingredient.strIngredient },
          }"
        >
          <h3 class="text-xl font-bold hover:text-blue-600">
            {{ ingredient.strIngredient }}
          </h3>
          <p class="text-justify">{{ ingredient.strDescription }}</p>
        </router-link>
      </div>
    </div>
    <NotFound v-else>INGREDIENTS</NotFound>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "../store";
import { Ingredient, Ingredients } from "../store/types";
import Loading from "../components/Loading.vue";
import NotFound from "../components/NotFound.vue";

const store = useStore();
const data = ref<Ingredients>(store.state.ingredients);
const keyword = ref("");

const filteredIngredients = computed<Ingredient[]>(() =>
  data.value.list.filter(({ strIngredient }) =>
    strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

onMounted(() => {
  if (data.value.list.length === 0) store.dispatch("loadIngredients");
});
</script>
