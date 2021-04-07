import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Services from "@/views/Services.vue";
import Test from "@/views/Test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
