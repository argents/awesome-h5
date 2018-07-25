import Vue from 'vue'
import VueScroller from 'vue-scroller'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'


// 业务模块
import home from  './components/index.vue'  // 好文


Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
    path: '/index',
    component: home,
    meta: {
        keepAlive: false
    }
},{
    path: '*',
    hidden: true,
    redirect: { path: '/index' }
}];

const router = new VueRouter({
    mode: 'history', // 不显示# 但是apache服务需要配置 index/*的访问形式
    routes: routes
});

FastClick.attach(document.body);

// import * as mixins from './mixins/index.js'
// // 注册Ajax交互和辅助混入对象.
// // 参考如下
// // https://cn.vuejs.org/v2/guide/mixins.html
// Vue.mixin(mixins.default);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
    created(){
    }
}).$mount('#app')

Vue.config.debug = true;
