import VueRouter from "vue-router"
import Vue from 'vue'
const Home = () =>
    import ('../view/home/home.vue')
const category = () =>
    import ('../view/category/category.vue')
const cart = () =>
    import ('../view/cart/cart.vue')
const profile = () =>
    import ('../view/me/me.vue')
Vue.use(VueRouter)
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: category
}, {
    path: '/cart',
    component: cart
}, {
    path: '/me',
    component: profile
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router