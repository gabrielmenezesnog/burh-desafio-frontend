import { createRouter, createWebHistory } from "vue-router";

const Homepage = () => import("../views/homepage/Homepage.vue");
const CurriculumEdit = () =>
  import("../views/curriculum-edit/CurriculumEdit.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/editar",
    name: "editar",
    component: CurriculumEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
