<template>
  <header class="p-5 text-front flex justify-between items-center">
    <NuxtLink class="text-xs font-semibold font-logo flex items-start" to="/">
      <!-- <p>zo</p> -->
      <p class="bg-front flex gap-1">
        <span class="flex flex-col justify-center"
          ><span class="px-1 rounded-br-sm bg-back">zo</span
          ><span class="px-1 text-back">na</span></span
        ><span class="flex flex-col justify-center"
          ><span class="px-1"></span><span class="px-1"></span
        ></span>
      </p>
    </NuxtLink>

    <input class="bg-front rounded-lg"></input>

    <div class="relative z-10">
      <button @click="toggleMenu" class="flex items-center">
        <font-awesome-icon icon="bars-staggered" class="relative text-xl" />
      </button>

      <nav
        v-if="isMenuOpen"
        ref="menuRef"
        class="bg-front shadow-2xl drop-shadow-carbon text-sm p-5 rounded-lg absolute right-0 top-10 font-semibold flex flex-col items-start gap-3"
      >
        <NuxtLink
          @click="closeMenu"
          class="flex items-center transition-colors duration-300 text-back/70 hover:text-back"
          to="/saunaer"
          >Badstuer <font-awesome-icon icon="temperature-full"
        /></NuxtLink>

        <NuxtLink
          @click="closeMenu"
          class="flex items-center transition-colors duration-300 text-back/70 hover:text-back"
          to="/saunaer"
          >Oversiktskart</NuxtLink
        >
        <NuxtLink
          @click="closeMenu"
          class="transition-colors duration-300 text-back/70 hover:text-back"
          to="/saunaer"
          >Lei ut</NuxtLink
        >

        <hr class="w-full border-t-[.1px] text-carbon" />
        <NuxtLink
          @click="closeMenu"
          class="backdrop-blur-xl font-normal transition-colors duration-300 text-carbon/70 hover:text-carbon"
          to="/login"
          >Logg inn</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = (event) => {
  event.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
