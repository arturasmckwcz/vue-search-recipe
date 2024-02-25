<template>
  <Loading v-if="data.loading">AREAS</Loading>
  <div v-else>
    <div
      v-if="data.list?.length"
      class="flex flex-col gap-5 mx-auto px-8 max-w-[65ch]"
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
            name: 'byACI',
            params: { aci: 'area', payload: area.strArea },
          }"
        >
          <h3 class="text-xl font-bold hover:text-blue-600">
            {{ area.strArea }}
          </h3>
        </router-link>
      </div>
    </div>
    <NotFound v-else>AREAS</NotFound>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "../store";
import { Area, Areas } from "../store/types";
import Loading from "../components/Loading.vue";
import NotFound from "../components/NotFound.vue";

const store = useStore();
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
