<template>
  <div class="font-sans text-front min-h-screen flex flex-col bg-back">
    <Header />

    <main class="flex-grow w-full py-5">
      <slot />
    </main>

    <Footer />
  </div>
</template>
