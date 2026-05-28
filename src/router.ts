import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ImpressumView from './views/ImpressumView.vue'
import GravitySimView from './views/GravitySimView.vue'
import AuvThesisView from './views/AuvThesisView.vue'
import PortfolioView from './views/PortfolioView.vue'

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
