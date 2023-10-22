import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界 (これはi18nのリソースですよ)'
    }
  }
}

Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})



new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
