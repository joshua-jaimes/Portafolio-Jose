import { createRouter, createWebHistory } from 'vue-router'

import LoginUsuario from '../views/loginUsuario.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import LecturaDiaria from '../views/LecturaDiaria.vue'
/* import LoginAdministrador from '../views/loginAdministrador.vue' */

const routes = [
  {
    path: '/',
    name: 'loginUsuario',
    component: LoginUsuario
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/LecturaDiaria',
    name: 'LecturaDiaria',
    component: LecturaDiaria
  }




  /*  {
     path: '/admin',
     name: 'loginAdministrador',
     component: LoginAdministrador
   } */
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router