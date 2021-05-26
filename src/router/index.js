import Vue from 'vue'
import VueRouter from 'vue-router'
import Lander from '../components/lander'
import SkillsBar from '../components/skills-bar'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Lander
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsBar
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
