<template>
  <h1
    class="my-5 py-3 bg-white shadow-md rounded-md text-3xl font-semibold italic text-center"
  >
    {{ title }}
    {{ by }}
    <span class="ml-1 font-bold not-italic">{{ value }}</span>
  </h1>
</template>

<script setup lang="ts">
const { title, by, value } = defineProps({
  title: { type: String, default: "Meals By " },
  by: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
