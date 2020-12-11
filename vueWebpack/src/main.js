// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import VueRouter from 'vue-router'
import store from './store'
// 引用API文件
// import http from './api/api'
import axios from 'axios'
import api from './api/index.js'
import './../static/utf8-php/ueditor.config.js'
import './../static/utf8-php/ueditor.all.min.js'
import './../static/utf8-php/lang/zh-cn/zh-cn.js'
import './../static/utf8-php/ueditor.parse.min.js'
import '../static/utf8-php/themes/default/css/ueditor.min.css'
import 'lib-flexible/flexible'
import VueLazyload from "vue-lazyload"
// 将API方法绑定到全局
Vue.prototype.$api = api
    // Vue.prototype.$http = http
    // Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.use(VueLazyload, {
    preload: 1.3,
    error: require("./assets/error.png"),
    // loading:"",
    attempt: 1
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})