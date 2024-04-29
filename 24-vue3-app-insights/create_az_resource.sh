export RG_NAME=sample-app-insights-web-123001
export LOCATION=Japaneast
export WORKSPACE_NAME=sample-system-log-01

# create rg
az group create --name $RG_NAME --location $LOCATION
# az group delete --name $RG_NAME
az monitor log-analytics workspace create --resource-group $RG_NAME --workspace-name $WORKSPACE_NAME

# get subscription id
subscriptionId="$(az account list --query "[?name=='AZ Learn 2021 従量課金'].id" --output tsv)"
echo $subscriptionId
APPINSIGHTS_NAME=myappinsights01

# create app insight
az monitor app-insights component create --app $APPINSIGHTS_NAME --location japaneast --kind web -g $RG_NAME --workspace "/subscriptions/$subscriptionId/resourcegroups/$RG_NAME/providers/microsoft.operationalinsights/workspaces/$WORKSPACE_NAME"

# get connect string
az monitor app-insights component show --app $APPINSIGHTS_NAME --resource-group $RG_NAME --query connectionString --output tsv
