/** @format */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/hosts",
		name: "Hosts",
		component: () => import("../views/Hosts.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/hosts/:hostId",
		name: "Host",
		component: () => import("../views/Host.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/settings",
		name: "Settings",
		component: () => import("../views/Settings.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/404",
		name: "NotFound",
		component: () => import("../views/NotFound.vue"),
	},
	{
		path: "*",
		redirect: "/404",
	},
];

const router = new VueRouter({
	routes,
});

// Auth Middleware
router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (localStorage.getItem("user_api_key") == null) {
			next({
				path: "/login",
				params: { nextUrl: to.fullPath },
			});
		}
	} else if (to.name == "Login") {
		localStorage.removeItem("user_api_key");
	}
	next();
});

export default router;
