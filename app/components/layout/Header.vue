<template>
  <header class="container mx-auto py-5 flex justify-between items-center">
    <NuxtLink class="text-xs font-semibold font-logo flex items-start" to="/">
      <Logo />
    </NuxtLink>

    <input class="bg-fog rounded-sm outline-0 focus:border-forest"></input>

    <div class="relative z-10 ">
      <button @click="toggleMenu" class="flex items-center text-text">
        <font-awesome-icon icon="bars-staggered" class="relative text-xl" />
      </button>

      <nav
        v-if="isMenuOpen"
        ref="menuRef"
        class="bg-text-background text-text/70 shadow-2xl drop-shadow-text text-sm p-5 rounded-lg absolute right-0 top-10 font-semibold flex flex-col items-start gap-3"
      >
        <NuxtLink
          @click="closeMenu"
          class=" hover:text-text flex items-center transition-colors duration-300"
          to="/saunaer"
          >Badstuer <font-awesome-icon icon="temperature-full"
        /></NuxtLink>

        <NuxtLink
          @click="closeMenu"
          class="hover:text-text flex items-center transition-colors duration-300"
          to="/saunaer"
          >Oversiktskart</NuxtLink
        >
        <NuxtLink
          @click="closeMenu"
          class="hover:text-text transition-colors duration-300"
          to="/saunaer"
          >Lei ut</NuxtLink
        >

        <hr class="w-full border-t-[.1px]" />
        <NuxtLink
          @click="closeMenu"
          class="hover:text-text backdrop-blur-xl font-normal transition-colors duration-300"
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
