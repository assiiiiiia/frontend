import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import LoginSignup from '@/views/LoginSignup.vue';
import PrivateSpace from '@/components/PrivateSpace.vue'; // Nouveau fichier
import UserTerms from '@/views/UserTerms.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/auth', 
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
       path: '/',
       component:LoginSignup 
   },
  { 
      path: '/private-space', 
      component: PrivateSpace
   },
   {
   path: '/UserTerms',
   name: 'UserTerms',
   component: UserTerms,
   },
  ];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});

export default router;
