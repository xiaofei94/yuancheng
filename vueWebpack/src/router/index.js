import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/page/index'
// import login from '@/page/login'
// import star from '@/components/component/star'
// import swiper from '@/components/swiper/swiper'
// import order from '@/page/order/order'
// import my from '@/page/my/my'
// import card from '@/page/card/card'
// import list from '@/page/list/list'
import aaa from '@/page/aaa/index'


Vue.use(Router)


    const routes = [{
                path: '',
                redirect: 'login',
//                 name: 'index',
                // component: index
                // children: []
            },
            {
//              path: '/login',
                name: 'login',
                component: () =>
                    import ('../page/login')
            },
            {
                // path: '/index',
                // name: 'index',
                // component: index,
                // meta: {
                //     // requireAuth: true
                // },
//              path: '/index',
                name: 'index',
                component: (res) => 
                 import ('../page/index'),
//              require(['@/page/index'], res),
                children: [{
                    path: '/my',
                    name: 'my',
                    componment: () => {
                        import ('../page/my/my')
                    }
                }]
            },
            
            {
//              path: '/cellitem',
                name: 'cellitem',
                component: () =>
                    import ('../components/cellitem/cellitem')
            },

            // {
            //     path: '/my',
            //     name: 'my',
            //     componment: my
            // },
            // {
            //     path: '/order',
            //     name: 'order',
            //     componment: order,
            //     meta: {
            //         requireAuth: true
            //     }
            // },
            {
//              path: '/order',
                name: 'order',
                component: resolve => 
                 import ('../page/order/order')
//              require(["@/page/order/order"], resolve)
            },
            {
//              path: '/card',
                name: 'card',
                component: () =>
                    import ('../page/card/card'),
                meta: {
                    requireAuth: true
                }
            },
            {
//              path: '/list',
                name: 'list',
                component: () =>
                    import ('../page/list/list'),
            },
            {
//              path: '/aaa',
                name: 'aaa',
                component: resolve => 
                    import ('../page/aaa/index'),
            },
            {
//              path: '/star',
                name: "star",
                component: () =>
                    import ('../components/component/star')
            },
            {
//              path: '/swiper',
                name: "swiper",
                component: () =>
                    import ('../components/swiper/swiper')
            },
            {
            	path:'/search',
            	name:'search',
            	component: () =>
            		import ('../components/search/search')
            },
            {
            	path:'/maintain',
            	name:'maintain',
            	component: () =>
            		import ('../page/maintain/index')
            },
            {
            	path:'/goods',
            	name:'goods',
            	component: () =>
            	import ("../page/goods/goods")
            },
            {
            	path:'/gds',
            	name:'gds',
            	component: () =>
            	import ("../page/goods/gds")
            },
            {
            	path:'/goodsdetils',
            	name:'goodsdetils',
            	component: () =>
            	import ("../page/goods/goodsdetils"),
            	meta: {
                    requireAuth: false
                }
            },
            {path:'*',redirect:'/'},
        ]
           routes.forEach(route => {
               route.path = route.path || '/' + (route.name || '');
           });
const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    var token = sessionStorage.getItem('token')
    const require = to.meta.requireAuth;
    console.log(token)
    if (to.matched.length ===0) {  //如果未匹配到路由
	    from.path? next({ path:from.path}) : next('/');   //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
	  }else{
	  	next()
	  }
    if (require) {
        if (token == null) {
            console.log('出问题了');
            //     next()
            // } else {
            // if (true) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }

    } else {
        next()
    }

})
export { router }