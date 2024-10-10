import { createRouter, createWebHistory } from 'vue-router'
import ViewUsers from '../views/ViewUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'login',
      component: () => import('../views/LoginUser.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: ViewUsers,
      meta: { requiresAuth: true },
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddUser.vue'),
    },
    {
      path: '/edit/:username',
      name: 'edit',
      component: () => import('../views/UpdateUser.vue'),
      meta: { requiresAuth: true },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/auth');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router