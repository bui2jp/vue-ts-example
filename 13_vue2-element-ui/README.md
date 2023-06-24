# 13 elemnet ui table 

## create project

"Manually select features" を選択して作成する。

```
# 1. インストールされていない場合、 Vue CLI をインストールしてください
npm install --global @vue/cli

# 2. 新規のプロジェクトを作成し、続いて "Manually select features" を選択して下さい
vue create my-project-name
```

## ライブラリ利用方法

install
```
npm i element-ui -S
```

setup (main.ts に以下を追加)
```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```