<template>
  <div class="h-150 w-full border-7 rounded-lg container mx-auto">
    <LMap
      class="z-0!"
      ref="map"
      :zoom="zoom"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />

      <!-- Add a marker at specific coordinate -->
      <LMarker :lat-lng="[63.763255, 10.070788]">
        <LPopup>
          <span>Victor's hot sauna</span>
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

const zoom = ref(6);
</script>
