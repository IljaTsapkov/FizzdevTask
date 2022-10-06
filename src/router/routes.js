
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/MainPage.vue'), meta: { requiresAuth: true } }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/AuthPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
