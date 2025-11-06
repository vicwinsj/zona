<template>
  <!-- Accordion med anbefalte saunaer -->
  <section class="container h-100 mx-auto flex flex-col gap-10">
    <h1>Anbefalte badstuer</h1>
    <div class="relative w-full">
      <div class="z-50 w-full flex gap-1 overflow-auto">
        <SaunaCard /><SaunaCard /><SaunaCard /><SaunaCard /><SaunaCard /><SaunaCard />
      </div>
      <div
        class="pointer-events-none absolute inset-0 w-full bg-gradient-to-r from-transparent via-transparent to-background"
      ></div>
    </div>
  </section>
  <section class="w-full bg-[url('/img/sauna.jpg')] bg-cover bg-center h-150">
    <article
      class="size-full mx-auto container py-10 flex flex-col items-center justify-end gap-3"
    >
      <div
        class="text-fog backdrop-blur-md w-fit p-10 rounded-lg flex flex-col gap-1 items-center justify-end"
      >
        <h2 class="text-7xl">Hvorfor badstubad er så helsefremmende</h2>
        <p>
          Hva er det egentlig som gjør at helsa kommer inn mens svetten pipler
          ut?
        </p>
      </div>
      <Button>Les mer</Button>
    </article>
  </section>
  <section class=""></section>
</template>
