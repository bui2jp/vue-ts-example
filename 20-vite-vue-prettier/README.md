# formatter & lint

Prettier & eslint & vscode

## 1. projectを作成

```
npm create vite@latest NN-xxxxxxx --template vue
```

```bash
npm install
npm run dev
```

## vscode に Prettier & eslint

拡張機能をインストールしておく

```
Prettier (formatter): v10.1.0
settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

※保存時に動くはず。動かない場合は設定から変更してみる
※vscodeの右下のPrettierでPrettier実行時のログが確認できる

```
eslint   (linter)   : v2.4.2
```

## npm install

```
$ npm install prettier -D --save-exact
$ cat package.json  | grep pretti
    "prettier": "3.0.3"
```

run (local)

```
$ npx prettier src --write
src/App.vue 163ms
src/components/HelloWorld.vue 39ms
src/main.ts 3ms
src/style.css 9ms
src/vite-env.d.ts 3m

$ echo $?
0 //正常
```
