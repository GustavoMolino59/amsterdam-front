/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import AuthenticationService from '@/shared/services/auth/AuthenticationService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([
    ...routes.map(route => {
      if (route.path === '/login' || route.path === '/register') {
        // Define que a rota de login não exige autenticação e usa o layout público
        return {
          ...route,
          meta: { requiresAuth: false, layout: 'default' },
        };
      }
      // Para todas as outras rotas, aplica autenticação e AuthenticatedLayout
      return {
        ...route,
        meta: { requiresAuth: true,  layout: 'authenticated' },
      };
    }),
    {
      path: '/',
      redirect: '/login', // Redireciona para a página de login por padrão
    },
  ]),
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('access_token');

  // Verifica se a rota requer autenticação
  if (to.meta.requiresAuth) {
    if (!token) {
      next('/login'); // Redireciona se não houver token
    } else {
      try {
        // Faz uma requisição para validar o token
        await AuthenticationService.validate();
        next(); // Permite o acesso se o token for válido
      } catch (error) {
        console.error('Token inválido ou expirado:', error);
        localStorage.removeItem('access_token'); // Remove o token inválido
        next('/login'); // Redireciona para o login
      }
    }
  } else {
    next(); // Permite o acesso a rotas públicas
  }
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
