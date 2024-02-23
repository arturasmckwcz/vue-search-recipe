<template>
  <header class="sticky top-0 bg-gray-100">
    <div class="py-2">
      <a href="https://www.themealdb.com/" target="_blank">
        <img src="../assets/the-meal-db-logo-small.png" alt="meal-db-logo" />
      </a>
    </div>
    <nav
      class="bg-white shadow-md h-16 rounded flex justify-between items-center px-6"
    >
      <router-link
        :to="{ name: 'home' }"
        class="transition-colors hover:text-blue-600"
      >
        <img width="16" src="../assets/home.256x255.png" alt="Home" />
      </router-link>
      <MenuBar class="sm:flex sm:gap-5 sm:flex-col" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import MenuBar from "./MenuBar.vue";
</script>
