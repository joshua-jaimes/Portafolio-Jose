import Primera from "../views/Primera.vue"
import Segunda from "../views/Segunda.vue"
import Tercera from "../views/Tercera.vue"

import Cuarta from "../views/Cuarta.vue"
import Quinta from "../views/Quinta.vue"

import { createRouter, createWebHashHistory } from "vue-router"




const routes = [
    {path:"/", component:Primera},
    {path:"/segunda", component:Segunda},
    {path:"/tercera", component:Tercera},
    {path:"/cuarta", component:Cuarta},
    {path:"/quinta", component:Quinta},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes


})
