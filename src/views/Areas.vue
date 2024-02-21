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
        placeholder="Search areas"
      />
      <div
        class="rounded bg-white shadow-md p-4"
        v-for="area of filteredAreas"
        :key="area.strArea"
      >
        <router-link
          :to="{
            name: 'byArea',
            params: { area: area.strArea },
          }"
        >
          <h3 class="text-xl font-bold hover:text-blue-600">
            {{ area.strArea }}
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
import { Area, Areas } from "../store/types";

const data = ref<Areas>(store.state.areas);
const keyword = ref("");

const filteredAreas = computed<Area[]>(() =>
  data.value.list.filter(({ strArea }) =>
    strArea.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

onMounted(() => {
  if (data.value.list.length === 0) store.dispatch("loadAreas");
});
</script>
