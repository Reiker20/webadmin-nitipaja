import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Forgot from '../components/ForgotPassword.vue';
import ConfirmPass from '../components/ConfirmPass.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/ForgotPassword', component: Forgot },
  { path: '/ConfirmPassword', component: ConfirmPass }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
