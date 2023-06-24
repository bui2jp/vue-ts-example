import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'

const messages = {
  ja: {
    message: {
      hello: '{msg} world',
      mymsg1: 'aaa',
      mymsg2: 'bbb',
      mymsg3: 'ccc',            
    }
  }
}

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ja', // デフォルトのロケールを設定します
  messages,
});

const app = new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

//10秒まってから更新してみる
function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

await delay(3000); // 1000ミリ秒（1秒）待機

app.$i18n.setLocaleMessage('ja', {
  message: {
    hello: '{msg} world',
    mymsg1: 'aaa xxx',
    mymsg2: 'bbb xxx',
    mymsg3: 'ccc xxx',
    // 新しいメッセージを追加する場合はここに追加します
  }
});
