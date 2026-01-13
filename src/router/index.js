import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'

const routes = [
    { path: '/', component: HeroSection, name: 'Home' },
    { path: '/about', component: AboutSection, name: 'About' },
    { path: '/experience', component: ExperienceSection, name: 'Experience' },
    { path: '/projects', component: ProjectsSection, name: 'Projects' },
    { path: '/contact', component: ContactSection, name: 'Contact' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
