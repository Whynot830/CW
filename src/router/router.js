import Home from '@/views/Home'
import Theory from '@/views/Theory'
import Catalog from '@/views/Catalog'
import SSD from '@/views/SSD'
import Contacts from '@/views/Contacts'
import About from '@/views/About'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/home',
        alias: '/',
        component: Home,
        meta: {
            pageTitle: ''
        }
    },
    {
        name: 'theory',
        path: '/theory',
        component: Theory,
        meta: {
            pageTitle: 'Теория'
        }
    },
    {
        name: 'catalog',
        path: '/catalog',
        component: Catalog,
        meta: {
            pageTitle: 'Каталог',
        },
    },
    {
        name: 'ssd',
        path: '/catalog/:id',
        component: SSD,
        meta: {
            pageTitle: '',
        },
        props: route => ({
            imgSrc: route.query.imgSrc,
            title: route.query.title,
            formFactor: route.query.formFactor,
            speed: route.query.speed,
            memoryType: route.query.memoryType,
            capacity: route.query.capacity,
            interfaces: route.query.interfaces,
            connector: route.query.connector,
            link: route.query.link
        })

    },
    {
        name: 'contacts',
        path: '/contacts',
        component: Contacts,
        meta: {
            pageTitle: 'Контакты',
        }
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        meta: {
            pageTitle: 'О сайте'
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router