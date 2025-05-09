import {register} from "./modules/register.js";
import {login} from "./modules/login.js";
import {home} from "./modules/home.js";
document.addEventListener("DOMContentLoaded", () => {

    register();
    login();
    home();
    
})