import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Forgot from '../components/ForgotPassword.vue';
import ConfirmPass from '../components/ConfirmPass.vue';
import Sidebar from '../components/Sidebar.vue';
import Home from '../views/Home.vue';
import User from '../views/User.vue'; 
import Report from '../views/Report.vue';
import Admin from '../views/Admin.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/ForgotPassword', component: Forgot },
  { path: '/ConfirmPassword', component: ConfirmPass },
  { 
    path: '/Sidebar', 
    component: Sidebar,
    children: [
      { path: '', component: Home },
      { path: '/home', component: Home }, 
      { path: '/user', component: User },
      { path: '/report', component: Report },
      { path: '/admin', component: Admin },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
