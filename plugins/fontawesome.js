import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSun,
  faMoon,
  faEnvelope,
  faMap,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(
  faSun,
  faMoon,
  faEnvelope,
  faMap,
  faFileLines,
  faGraduationCap,
  faBriefcase,
  faCode,
  faGithub,
  faLinkedin,
  faInstagram
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
