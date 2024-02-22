<template>
  <div class="max-w-[100ch] mx-auto">
    <navbar />
    <main class="min-h-full"><router-view /></main>
  </div>
</template>

<script setup lang="ts">
import navbar from "./NavBar.vue";
</script>
