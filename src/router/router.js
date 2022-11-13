import vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
vue.use(VueRouter);

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 创建路由集合
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
        redirect: 'home/file',
        children:
            [
                {
                    path: '/home/file',
                    component: () => import('@/views/Home/Right/components/file/File.vue'),
                    // 用requiredPath来判断是否设置路由守卫
                    meta: {
                        title: "文件",
                        requiredPath: true
                    }
                },
                {
                    path: '/home/image',
                    component: () => import('@/views/Home/Right/components/imageJIa/Image.vue'),
                    meta: {
                        title: "图片",
                        requiredPath: true
                    }
                },
                {
                    path: '/home/viedo',
                    component: () => import('@/views/Home/Right/components/viedo/Video.vue'),
                    meta: {
                        title: "视频",
                        requiredPath: true
                    }
                },
                {
                    path: '/home/music',
                    component: () => import('@/views/Home/Right/components/music/Music.vue'),
                    meta: {
                        title: "音乐",
                        requiredPath: true
                    }
                },
            ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            requiredPath: false
        }
    },
    {
        path: '/register',
        component: () => import('@/views/register/index.vue'),
        meta: {
            requiredPath: false
        }
    }
];

// 创建路由实例，管理路由
const router = new VueRouter({
    routes,
    // base: process.env.BASE_URL,
    mode: 'hash'
});



// 设置全局守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
        next();
    } else {
        // 没有token，判断是否为要权限的路由
        if (to.meta.requiredPath) {
            // 没登陆就回登录
            next('/login');
        } else {
            next();
        }

    }
})



export default router