import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
// import AccountTypesIndexView from "../views/account_types/AccountTypesIndexView.vue"
// import { getAuth } from "firebase/auth";
import AccountTypeView from "@/views/AccountTypeView";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/account_types',
    name: 'account_types',
    component: AccountTypeView
  }
  // {
  //   path: "/register",
  //   name: "register",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  // },
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  //   meta: {
  //     authRequired: true,
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // const auth = getAuth();

//   if (to.matched.some((record) => record.meta.authRequired)) {
//     if (auth.currentUser) {
//       next();
//     } else {
//       alert("You've must been logged to access this area");
//       router.push("/");
//     }
//   } else {
//     next();
//   }
// });

export default router;