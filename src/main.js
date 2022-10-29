import Vue from 'vue'
import App from './App.vue'
// 注册路由
import router from './router/router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/reset.css'

// 引入屏幕适应相关的包
import "amfe-flexible/index.js";

Vue.config.productionTip = false;//生成提示信息关闭
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
