import Vue from './vue'
// 一定要以vue结尾
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
// 基于模块化机制
Vue.use(VueRouter)
// 声明组件
import Home from './components/Home/Home.vue'
import Course from './components/Course/Course.vue'
//创建路由对象
const router = new VueRouter({
    // 配置路由信息
    routes: [ // 这里不要写错了
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/course',
            name: 'course',
            component: Course
        },
    ]
})
let vm = new Vue({
    el: '#app',
    router: router,
    render: c => c(App)
    // template: `<App></App>`,
    // components: {
    //     App
    // }
})