import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../pages/city/city')), 'city')
const search = r => require.ensure([], () => r(require('../pages/search/search')), 'search')
const job = r => require.ensure([], () => r(require('../pages/job/job')), 'job')
const jobDetail = r => require.ensure([], () => r(require('../pages/job/jobDetail')), 'jobDetail')
const apply = r => require.ensure([], () => r(require('../pages/apply/apply')), 'apply')
const manage = r => require.ensure([], () => r(require('../pages/manage/manage')), 'manage')
const user = r => require.ensure([], () => r(require('../pages/user/user')), 'user')
const resume = r => require.ensure([], () => r(require('../pages/user/resume')), 'resume')
const jobSet = r => require.ensure([], () => r(require('../pages/user/jobSet')), 'jobSet')
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')

const router = new VueRouter({
	routes:[
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页
        {
            path: '/home',
            name:home,
            component: home
        },
        //选择城市页
        {
            path: '/city',
            name:city,
            component: city
        },
        //搜索页
        {
            path: '/search',
            name:search,
            component: search
        },
        //所有兼职页
        {
            path: '/job',
            name:job,
            component: job,
            meta: { keepAlive: true }
        },
        {
            path: '/job/jobDetail', //兼职详情页
            name:jobDetail,
            component: jobDetail
        },
        //确认报名页
        {
            path: '/apply',
            name:apply,
            component: apply,
        },
        //管理页
        {
            path: '/manage',
            name:manage,
            component: manage
        },
        //个人中心页
        {
            path: '/user',
            name:user,
            component: user
        },
        {
            path: '/user/resume',   //我的简历页
            name:resume,
            component: resume,
        },
        {
            path: '/user/jobSet',   //求职意见设置页
            name:jobSet,
            component: jobSet
        },
       
        //登录注册页
        {
            path: '/login',
            name:login,
            component: login
        }
	]
})
export  default  router


