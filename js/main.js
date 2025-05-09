import { register } from "./modules/register.js";
import { login } from "./modules/login.js";
import { home } from "./modules/home.js";
import { image } from "./modules/image.js";
import { media } from "./modules/media.js";
import { quote } from "./modules/citation.js";
import { year } from "./modules/index.js";
document.addEventListener("DOMContentLoaded", () => {
  register();
  login();
  home();
  image();
  media();
  quote();
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    year();
  }
});
