// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import StoreView from "@/views/StoreView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
const routes = [
  {
    path: "/",
    name: "Store",
    component: StoreView,
    meta: {
      title: "Multi Tienda Vue",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "Página no encontrada",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// SEO: título dinámico
const DEFAULT_TITLE = "Multi Tienda Vue";

router.afterEach((to) => {
  const title = to.meta?.title || DEFAULT_TITLE;
  document.title = title;
});

export default router;
