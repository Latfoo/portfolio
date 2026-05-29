import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'
import GravitySimView from './views/projects/GravitySimView.vue'
import AuvThesisView from './views/projects/AuvThesisView.vue'
import PortfolioView from './views/projects/PortfolioView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                      component: HomeView },
    { path: '/impressum',             component: ImpressumView },
    { path: '/projects/gravity-sim',  component: GravitySimView },
    { path: '/projects/auv-thesis',   component: AuvThesisView },
    { path: '/projects/portfolio',    component: PortfolioView },
  ],
})
