import { createRouter, createWebHistory } from "vue-router";
import List from "../views/List.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/inventory",
    name: "Inventory",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inventory.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
