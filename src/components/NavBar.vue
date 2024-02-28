<template>
  <header class="sticky top-0 mb-5 bg-gray-100">
    <div data-test="navbar-meal-db" class="py-2">
      <a href="https://www.themealdb.com/" target="_blank">
        <img src="../assets/the-meal-db-logo-small.png" alt="meal-db-logo" />
      </a>
    </div>
    <nav
      class="bg-white shadow-md h-16 rounded flex justify-between items-center px-6"
    >
      <router-link
        data-test="navbar-home"
        :to="{ name: 'home' }"
        class="transition-colors hover:text-blue-600"
      >
        <img width="16" src="../assets/home.256x255.png" alt="Home" />
      </router-link>
      <div
        data-test="navbar-sandwich"
        class="sm:hidden grid place-items-center relative"
      >
        <span @click="showMenuBar = !showMenuBar">
          <img width="16" src="../assets/menu_2976215.png" alt="sandwich" />
        </span>
        <MenuBar
          v-if="showMenuBar"
          data-test="navbar-menu-bar-y"
          class="flex flex-col w-[13ch] absolute top-6 right-0"
          childClass="border bg-white shadow-lg text-right"
          @click="showMenuBar = false"
        />
      </div>
      <MenuBar data-test="navbar-menu-bar-x" class="hidden sm:flex sm:gap-5" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuBar from "./MenuBar.vue";

const showMenuBar = ref(false);
</script>
