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
      <div class="SANDWICH sm:hidden grid place-items-center relative">
        <span @click="showMenuBar = !showMenuBar">
          <img width="16" src="../assets/menu_2976215.png" alt="" />
        </span>
        <MenuBar
          v-if="showMenuBar"
          class="flex flex-col w-[13ch] absolute top-6 right-0"
          childClass="border bg-white shadow-lg text-right"
          @click="showMenuBar = false"
        />
      </div>
      <MenuBar class="hidden sm:flex sm:gap-5" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuBar from "./MenuBar.vue";
import { onMounted } from "vue";

const showMenuBar = ref(false);

onMounted(() => {
  console.log("DEBUG:onMounted:showMenuBar:", showMenuBar.value);
  window.addEventListener;
});
</script>
