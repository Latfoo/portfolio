import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'
import AuvThesisView from './views/projects/AuvThesisView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                    component: HomeView },
    { path: '/impressum',           component: ImpressumView },
    { path: '/projects/auv-thesis', component: AuvThesisView },
  ],
})
