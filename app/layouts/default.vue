<template>
  <div class="min-h-screen flex flex-col bg-yellow-950 bg-radial">
    <!-- Header -->
    <header class="p-10 text-white flex justify-between">
      <NuxtLink
        class="rounded-r-lg border-white border-5 text-3xl font-semibold font-raleway flex gap-3"
        to="/"
        ><span class="flex flex-col justify-center"
          ><span class="p-2 bg-white text-yellow-950">z</span
          ><span class="p-2">o</span></span
        ><span class="flex flex-col justify-center"
          ><span class="p-2">n</span><span class="p-2">a</span></span
        ></NuxtLink
      >

      <nav class="font-semibold flex gap-3 items-center">
        <NuxtLink
          class="transition-colors duration-300 text-white/70 py-1 px-3 hover:text-white"
          to="/saunaer"
          >Saunaer</NuxtLink
        >
        <NuxtLink
          class="transition-colors duration-300 text-white/70 py-1 px-3 hover:text-white"
          to="/about"
          >Om Zona</NuxtLink
        >
      </nav>
    </header>

    <!-- Sideinnhold -->
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 text-center p-4">©2025 ZONA</footer>
  </div>
</template>
