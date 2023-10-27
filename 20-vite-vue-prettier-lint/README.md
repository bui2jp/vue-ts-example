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

```
eslint   (linter)   : v2.4.2
```

## npm install

```
$ npm install prettier -D --save-exact
$ cat package.json  | grep pretti
    "prettier": "3.0.3"
```
