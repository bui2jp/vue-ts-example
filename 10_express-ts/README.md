


```
npm init -y

npm install -D typescript
npm install -D @types/node
npm install -D ts-node

npx tsc --init
```

```
ls -ltr
total 40
drwxr-xr-x  18 takuya  staff    576 12 17 17:50 node_modules
-rw-r--r--   1 takuya  staff  13683 12 17 17:50 package-lock.json
-rw-r--r--   1 takuya  staff    340 12 17 17:50 package.json
-rw-r--r--   1 takuya  staff      0 12 17 17:50 README.md
```

```
npm install express
npm install -D @types/express
```

```
npm install log4js
npm install @types/log4js
```

# azure

rg
```
RG_NAME=rg-appi-example
LOCATOIN=japaneast
```

app service
```
APPSRV_NAME=appi-example
az webapp up -n $APPSRV_NAME -l $LOCATOIN -g $RG_NAME --runtime "NODE:16-lts" --sku "P1V2"
```

APPSRV_NAME_WIN=appi-example-win
az webapp up -n $APPSRV_NAME_WIN -p asp-win

(delete) rg
```
az group delete -g $RG_NAME
```
