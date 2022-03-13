import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/function',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Function.vue'),
                    meta: { title: '功能模块' }
                },
                {
                    path: '/organization',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Organization.vue'),
                    meta: { title: '组织机构' }
                },
                {
                    path: '/logs',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Logs.vue'),
                    meta: { title: '日志管理' }
                },
                {
                    path: '/administrator',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Administrator.vue'),
                    meta: { title: '管理员' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '消息通知' }
                },
                {
                    path: '/student',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/Student.vue'),
                    meta: { title: '学生管理' }
                },
                {
                    path: '/teacher',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/Teacher.vue'),
                    meta: { title: '教师管理' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: '数据分析' }
                },
                
               
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
