<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <nav class="flex gap-3">
        <NuxtLink to="/">Hjem</NuxtLink>
        <NuxtLink to="/about">Om oss</NuxtLink>
        <NuxtLink to="/finnsauna">Finn sauna</NuxtLink>
      </nav>
    </header>

    <!-- Sideinnhold -->
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 text-center p-4">© 2025 Mitt nettsted</footer>
  </div>
</template>
