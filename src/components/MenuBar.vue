<template>
  <div>
    <router-link
      data-test="menubar-areas"
      :to="{ name: 'areas' }"
      :class="strClass"
    >
      <span>Areas</span>
    </router-link>
    <router-link
      data-test="menubar-categories"
      :to="{ name: 'categories' }"
      :class="strClass"
    >
      <span>Categories</span>
    </router-link>
    <router-link
      data-test="menubar-ingredients"
      :to="{ name: 'ingredients' }"
      :class="strClass"
    >
      <span>Ingredients</span>
    </router-link>
    <router-link
      data-test="menubar-byLetter"
      :to="{ name: 'byLetter' }"
      :class="strClass"
    >
      <span>Meals By Letter</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { childClass } = defineProps({
  childClass: {
    type: String,
    required: false,
  },
});
const strClass = computed(
  () => childClass + " px-2 h-full transition-colors hover:text-blue-600"
);
</script>
