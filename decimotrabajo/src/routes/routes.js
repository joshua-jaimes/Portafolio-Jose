import Primera from "../views/Primera.vue"
import Segunda from "../views/Segunda.vue"
import Tercera from "../views/Tercera.vue"

import Cuarta from "../views/Cuarta.vue"

import { createRouter, createWebHashHistory } from "vue-router"




const routes = [
    {path:"/", component:Primera},
    {path:"/segunda", component:Segunda},
    {path:"/tercera", component:Tercera},
    {path:"/cuarta", component:Cuarta}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes


})
