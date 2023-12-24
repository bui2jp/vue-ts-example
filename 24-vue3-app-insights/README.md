# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


# Azure Application Insights
RG作成
```
RG_NAME=sample-app-insights-web-01
LOCATION=Japaneast
WORKSPACE_NAME=sample-system-log-01
```

```
az group create --name $RG_NAME --location $LOCATION
# az group delete --name $RG_NAME
az monitor log-analytics workspace create --resource-group $RG_NAME --workspace-name $WORKSPACE_NAME
```       


pplication Insights Azure CLI コマンド(プレビュー)
```
az extension add -n application-insights
```

```
subscriptionId="$(az account list --query "[?name=='AZ Learn 2021 従量課金'].id" --output tsv)"
echo $subscriptionId
APPINSIGHTS_NAME=myappinsights01
```

```
az monitor app-insights component create --app demoApp --location japaneast --kind web -g $RG_NAME --workspace "/subscriptions/$subscriptionId/resourcegroups/$RG_NAME/providers/microsoft.operationalinsights/workspaces/$WORKSPACE_NAME"
```
