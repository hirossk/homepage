import { createRouter, createWebHistory } from "vue-router";
import App from "../App";
import About from "../views/About"; 
import Album from "../views/Album"; 

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Album",
    name: "Album",
    component: Album,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;