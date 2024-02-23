<template>
  <header class="sticky top-0 bg-gray-100">
    <div class="py-2">
      <a href="https://www.themealdb.com/" target="_blank">
        <img src="../assets/the-meal-db-logo-small.png" alt="meal-db-logo" />
      </a>
    </div>
    <nav
      class="bg-white shadow-md h-16 rounded flex justify-between items-center px-4"
    >
      <router-link
        :to="{ name: 'home' }"
        class="px-2 transition-colors hover:text-blue-600"
      >
        <img width="16" src="../assets/home.256x255.png" alt="Home" />
      </router-link>
      <div class="flex gap-5">
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
    </nav>
  </header>
</template>

<script setup></script>
