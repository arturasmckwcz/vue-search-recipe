<template>
  <div>
    <router-link :to="{ name: 'areas' }" :class="strClass"> Areas </router-link>
    <router-link :to="{ name: 'categories' }" :class="strClass">
      Categories
    </router-link>
    <router-link :to="{ name: 'ingredients' }" :class="strClass">
      Ingredients
    </router-link>
    <router-link :to="{ name: 'byLetter' }" :class="strClass">
      Meals By Letter
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
