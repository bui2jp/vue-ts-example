# es-lint, prettier for vue3-ts

## プロジェクト作成など

```
node -v
v16.18.1
npm -v
8.19.2
```

## create vue project
```
npm init vite@latest example-lint-format
```

## es-lint (静的解析)
install
```
npm init @eslint/config
```
run
```
npx eslint src
```
あとは config(.eslintrc.cjs) を調整していく

## prettier (フォーマット)
install
```
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
echo dist > .prettierignore
```

run format
```
npx prettier --write .
```
* ci に組み込む場合はこちら
```
npx prettier --check .
```

## packege.json (config)

`npm run lint-fmt` を実行

```
cat package.json
{
:
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "my-lint-fmt": "npx eslint src && npx prettier --write ."
  },
:  
```

## git command 連携 (lint-staged)
```
npx mrm@2 lint-staged
```

## Sonar Cloud 
download sonar-scanner-cli-4.7.0.2747-macosx.zip from https://sonarcloud.io/

```
export SONAR_TOKEN=< SET TOKEN HERE from portal>
sh run-sonar-scan.sh
```
