//TODO remove those imports after testing
// import * as api from "./data/events.js";
// import * as userApi from "./data/users.js";
import { page } from "./lib.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { logout } from "./data/users.js";
import { updateNav } from "./util.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";

updateNav();

page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);
page.start();

document.getElementById("logoutBtn").addEventListener("click", async () => {
  logout();
  updateNav();
  page.redirect("/");
});
//TODO remove those imports after testing
// window.api = api;
// window.userApi = userApi;
