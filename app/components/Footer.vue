<template>
  <footer
    class="flex flex-col gap-10 mx-10 p-10 bg-front text-carbon rounded-tl-lg text-sm text-center"
  >
    <div
      class="flex justify-around gap-5 border-b-[.1px] border-b-back/30 py-10"
    >
      <ul class="flex-1 flex flex-col items-start">
        <h3 class="text-sm! text-back">Hjelp</h3>
        <li>Ofte stilte spørsmål</li>
      </ul>
      <ul class="flex-1 flex flex-col items-start">
        <h3 class="text-sm! text-back">Utleie</h3>
        <li>Lei ut badstue</li>
      </ul>
      <ul class="flex-1 flex flex-col items-start">
        <h3 class="text-sm! text-back">Zona</h3>
        <li><NuxtLink to="/about">Om oss</NuxtLink></li>
        <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
        <li>
          <NuxtLink to="/privacypolicy">Personvernerklæring</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-10 items-center">
      <ul>
        <li>
          <NuxtLink to=""
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></NuxtLink>
          <NuxtLink to=""
            ><font-awesome-icon :icon="['fab', 'x-twitter']"
          /></NuxtLink>
          <NuxtLink to=""
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></NuxtLink>
        </li>
      </ul>
      <p class="text-xs">©2025 Harbad</p>
    </div>
  </footer>
</template>
