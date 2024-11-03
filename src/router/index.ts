import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Flow from "@/views/Flow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/flow",
    name: "flow",
    component: Flow,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
