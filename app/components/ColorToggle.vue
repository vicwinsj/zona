<template>
  <button
    @click="toggleColorMode"
    class="w-fit h-fit text-fog/70 hover:text-fog p-[.15rem] rounded-sm text-xs transition-colors duration-300"
  >
    <span>
      <font-awesome-icon :icon="colorMode === 'dark' ? 'sun' : 'moon'"
    /></span>
  </button>
</template>

<script setup>
import { useColorMode } from "@/composables/useColorMode.js";

const { colorMode, toggleColorMode } = useColorMode();
</script>
