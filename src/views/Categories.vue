<template>
  <Loading v-if="data.loading">CATEGORIES</Loading>
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
            name: 'byACI',
            params: { aci: 'category', payload: category.strCategory },
          }"
        >
          <h3 class="text-xl font-bold hover:text-blue-600">
            {{ category.strCategory }}
          </h3>
        </router-link>
      </div>
    </div>
    <NotFound v-else>CATEGORIES</NotFound>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "../store";
import { Categories, Category } from "../store/types";
import Loading from "../components/Loading.vue";
import NotFound from "../components/NotFound.vue";

const store = useStore();
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
