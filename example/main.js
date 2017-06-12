/**
 * Created by may on 12/06/2017.
 */
'use strict';
import Vue from 'vue';
import App from './app.vue';

import Mint from 'mint-ui';
Vue.use(Mint);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

//实例化vue组件
new Vue({
    el: '#app',
    render: h => h(App)
});