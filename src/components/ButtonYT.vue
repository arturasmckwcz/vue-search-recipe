<template>
  <a :class="aClass" :href="href ? href : urlYT" target="_blanc">
    <slot>YouTube</slot>
    <img
      class="inline-block"
      :width="imgWidth"
      src="../assets/youtube-logo-png-2067.png"
      alt="Ext. link"
    />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
interface Props {
  size?: Size;
  href?: string;
}

const { size, href } = defineProps<Props>();
const aClass = computed(
  () =>
    `flex items-center gap-1 italic hover:text-red-600 text-${size || "base"}`
);

const mapSizeToWidth: Record<Size, number> = {
  xs: 16,
  sm: 24,
  base: 32,
  lg: 42,
  xl: 56,
  "2xl": 72,
};

const imgWidth = computed(() =>
  size ? mapSizeToWidth[size] : mapSizeToWidth["base"]
);

const urlYT = "https://youtube.com";
</script>
