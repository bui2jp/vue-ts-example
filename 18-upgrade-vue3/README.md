# 18-upgrade-vue3

- vue2 を vue3 に upgrade
- element ui を Element Plus にupgrade
- その他ライブラリも必要に応じて upgrade

## install element ui(※Element Plus)
```
npm i element-ui -S
```

```
$ cat src/main.ts 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## Project setup, run, build
```
npm install
npm run serve
npm run build
npm run lint
```
