import { createRouter, createWebHashHistory } from "vue-router";
import PenthousePage from './components/PenthousePage.vue'
import FeaturesPage from './components/FeaturesPage.vue'
import ApartmentPage from './components/ApartmentPage.vue'
import MainContent from './components/MainContent.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/main', component: MainContent, alias: '/' },
    { path: '/penthouse', component: PenthousePage },
    { path: '/features', component: FeaturesPage },
    { path: '/apartment', component: ApartmentPage },
  ]
})