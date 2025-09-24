import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTemperatureFull,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faTemperatureFull,
  faBarsStaggered,
  faXTwitter,
  faFacebook,
  faInstagram
);
console.log("Facebook icon:", faFacebook);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
