import { createApp } from 'vue'

import i18n from './i18n'
//import Vue from 'vue'
import App from './App.vue'
//import VueI18n from 'vue-i18n'



//Vue.config.productionTip = false


//Vue.use(VueI18n)

// Create VueI18n instance with options
//const i18n = new VueI18n({


// new Vue({
//   i18n,
//   render: h => h(App),
// }).$mount('#app')

const app = createApp(App)
app.use(i18n);
app.mount('#app');

const messages2 = {
    message: {
      hello: 'こんにちは、setLocaleMessage で変更しましたよ'
    }
}
i18n.global.setLocaleMessage('ja',messages2);