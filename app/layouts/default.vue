<template>
  <div
    class="font-sans text-foreground min-h-screen flex flex-col bg-background"
  >
    <LayoutHeader />

    <main class="flex-grow w-full py-5">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>
