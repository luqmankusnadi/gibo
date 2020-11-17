import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import BuildOptimizer from "../views/BuildOptimizer.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/build-optimizer",
    name: "BuildOptimizer",
    component: BuildOptimizer
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
