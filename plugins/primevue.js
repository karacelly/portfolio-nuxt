import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Timeline from "primevue/timeline";
import Card from "primevue/card";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Timeline", Timeline);
  nuxtApp.vueApp.component("Card", Card);
  //other components that you need
});
