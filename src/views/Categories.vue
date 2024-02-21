<template>
  <div v-if="data.loading">LOADING AREAS...</div>
  <div v-else>
    <div
      v-if="data.list?.length"
      class="flex flex-col gap-5 mx-auto p-8 max-w-[65ch]"
    >
      <input
        class="rounded shadow-md"
        v-model="keyword"
        placeholder="Search categories"
      />
      <div
        class="rounded bg-white shadow-md p-4"
        v-for="category of filteredCategories"
        :key="category.strCategory"
      >
        <router-link
          :to="{
            name: 'byCategory',
            params: { category: category.strCategory },
          }"
        >
          <h3 class="text-xl font-bold hover:text-blue-600">
            {{ category.strCategory }}
          </h3>
        </router-link>
      </div>
    </div>
    <div v-else>NO AREAS FOUND</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import store from "../store";
import { Categories, Category } from "../store/types";

const data = ref<Categories>(store.state.categories);
const keyword = ref("");

const filteredCategories = computed<Category[]>(() =>
  data.value.list.filter(({ strCategory }) =>
    strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

onMounted(() => {
  if (data.value.list.length === 0) store.dispatch("loadCategories");
});
</script>
