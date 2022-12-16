import {createWebHistory, createRouter} from "vue-router"
import Resume from "@/views/Resume.vue";
import ScreenChoice from "@/views/ScreenChoice.vue";

const routes = [{
    path: "/resume",
    name: "Resume",
    component: Resume
},
    {path: "/",
        name: "Screens",
        component: ScreenChoice},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router