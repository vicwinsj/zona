<template>
  <footer class="flex flex-col flex-end w-full text-text text-sm text-center">
    <div class="bg-benchwood container mx-auto pb-10">
      <div class="w-full flex">
        <div class="bg-background h-50 w-full rounded-br-3xl">
          <div class="flex justify-around p-3 gap-5">
            <ul class="flex-1 flex flex-col items-start">
              <h3 class="text-sm! text-foreground">Hjelp</h3>
              <li>Ofte stilte spørsmål</li>
            </ul>
            <ul class="flex-1 flex flex-col items-start">
              <h3 class="text-sm! text-foreground">Utleie</h3>
              <li>Lei ut badstue</li>
            </ul>
            <ul class="flex-1 flex flex-col items-start">
              <h3 class="text-sm! text-foreground">Zona</h3>
              <li><NuxtLink to="/about">Om oss</NuxtLink></li>
              <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
              <li>
                <NuxtLink to="/privacypolicy">Personvernerklæring</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-fog bg-benchwood h-50 w-1/3 p-3">
          <ul>
            <li class="flex gap-3">
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
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-3 pt-30">
        <div>
          <strong>Zona A/ÆSJ</strong>
          <p>Leif Tronstads veg 2, 7051 Trondheim</p>
        </div>
        <ColorToggle />
        <p class="text-[10px] text-fog">©2025 VITO IT</p>
      </div>
    </div>
  </footer>
</template>
