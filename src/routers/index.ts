import { createRouter, createWebHistory } from 'vue-router';
import AdminRoute from './admin';

const router = createRouter({
  history: createWebHistory(),
  routes: [...AdminRoute],
});

export default router;
