<template>
  <header
    class="sticky top-0 bg-white shadow-md h-16 flex justify-between items-center px-4"
  >
    <router-link
      :to="{ name: 'home' }"
      class="px-2 transition-colors hover:text-blue-600"
    >
      <img width="16" src="../assets/home.256x255.png" alt="Home" />
    </router-link>
    <div class="flex gap-5">
      <router-link
        :to="{ name: 'byKeyword', params: { keyword: '' } }"
        class="px-2 h-full transition-colors hover:text-blue-600"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full transition-colors hover:text-blue-600"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-2 h-full transition-colors hover:text-blue-600"
        >Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>
