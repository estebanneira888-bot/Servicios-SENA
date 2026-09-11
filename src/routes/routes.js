import Enfermeria from "../views/Enfermeria.vue"  
import Biblioteca from "../views/Biblioteca.vue"
import Bienestar from "../views/Bienestar.vue"
import Cafeteria from "../views/Cafeteria.vue"
import Coordinacion from "../views/Coordinacion.vue"
import Acerca from "../views/Acerca.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {path:"/", component: Acerca},
    {path:"/Enfermeria", component:Enfermeria},
    {path:"/Biblioteca", component:Biblioteca},
    {path:"/Bienestar", component:Bienestar},
    {path:"/Cafeteria", component:Cafeteria},
    {path:"/Coordinacion", component:Coordinacion}
]

export const router = createRouter({
    routes,
    history:createWebHashHistory()
})

