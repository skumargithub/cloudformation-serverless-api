# https://www.freecodecamp.org/news/quickly-create-a-serverless-restful-api-with-nodejs-and-aws-lambda-api-gateway-and-a6be891cc16a/

curl -i \
  -H "Accept: application/json" \
  -H "X-HTTP-Method-Override: POST" \
  -X POST -d '{"iot_id":"3","weight":"3wt"}' \
  https://zqb8xqj6ce.execute-api.us-east-2.amazonaws.com/prod/iot
 
