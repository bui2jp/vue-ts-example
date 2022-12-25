# 
echo "!!! Automatic Analysis need to be 'OFF' (portal)"
# 
# export SONAR_TOKEN=< SET TOKEN HERE>
sonar-scanner-4.7.0.2747-macosx/bin/sonar-scanner \
  -Dsonar.organization=bui2jp \
  -Dsonar.projectKey=bui2jp_vue2-ts-example \
  -Dsonar.sources=./example-lint-format \
  -Dsonar.host.url=https://sonarcloud.io
