import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewBookView from "../views/NewBookView.vue";
import UpdateBookView from "../views/UpdateBookView.vue";
import NewWriterView from "../views/NewWriterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: NewBookView,
  },
  {
    path: "/atualizacao",
    name: "atualizacao",
    component: UpdateBookView,
  },
  {
    path: "/cadastro-autor",
    name: "cadastro-autor",
    component: NewWriterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
