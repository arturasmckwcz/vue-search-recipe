<template>
  <div>
    <router-link
      :to="{ name: 'areas' }"
      class="px-2 h-full transition-colors hover:text-blue-600"
    >
      Areas
    </router-link>
    <router-link
      :to="{ name: 'categories' }"
      class="px-2 h-full transition-colors hover:text-blue-600"
    >
      Categories
    </router-link>
    <router-link
      :to="{ name: 'ingredients' }"
      class="px-2 h-full transition-colors hover:text-blue-600"
    >
      Ingredients
    </router-link>
    <router-link
      :to="{ name: 'byLetter' }"
      class="px-2 h-full transition-colors hover:text-blue-600"
    >
      Meals By Letter
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>
