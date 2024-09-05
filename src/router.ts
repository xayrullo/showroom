import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/about.vue"),
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: () => import("@/views/cooperation.vue"),
    },
    {
      path: "/subscribe",
      name: "subscribe",
      component: () => import("@/views/subscribe.vue"),
    },
    {
      path: "/user",
      name: "user-body",
      component: () => import("@/views/user.vue"),
      children: [
        {
          path: ":/info",
          name: "user-info",
          component: () => import("@/views/user/detail.vue"),
        },
        {
          path: ":/purchases",
          name: "user-purchases",
          component: () => import("@/views/user/purchases.vue"),
        },
      ],
    },
    {
      path: "/products",
      name: "products-body",
      component: () => import("@/views/products.vue"),
      children: [
        {
          path: "",
          name: "products",
          component: () => import("@/views/products/index.vue"),
        },
        {
          path: ":id",
          name: "products-detail",
          component: () => import("@/views/products/detail.vue"),
        },
      ],
    },
    {
      path: "/orderDetail",
      name: "orderDetail",
      component: () => import("@/views/orderDetail.vue"),
    },
    {
      path: "/saveProduct",
      name: "saveProduct",
      component: () => import("@/views/saveProduct.vue"),
    },
    {
      path: "/basket",
      name: "basket",
      component: () => import("@/views/basket.vue"),
    },
  ],
});

export default router;
