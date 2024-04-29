# Azure App Insights w/ vue3

# Azure Application Insights

RG 作成

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
