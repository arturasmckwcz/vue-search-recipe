<template>
  <a
    :class="`flex items-center gap-1 italic hover:text-red-600 text-${computedSize}`"
    :href="computedHref"
    target="_blanc"
  >
    <slot>YouTube</slot>
    <img
      class="inline-block"
      :width="mapSizeToWidth[computedSize]"
      src="../assets/youtube-logo-png-2067.png"
      alt="Ext. link"
    />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

export type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
interface Props {
  size?: Size;
  href?: string;
}
const mapSizeToWidth: Record<Size, number> = {
  xs: 16,
  sm: 24,
  base: 32,
  lg: 42,
  xl: 56,
  "2xl": 72,
};

const { size, href } = defineProps<Props>();

const computedSize = computed(() =>
  size && mapSizeToWidth[size] ? size : "base"
);
const computedHref = computed(() => (href ? href : "https://youtube.com"));
</script>
