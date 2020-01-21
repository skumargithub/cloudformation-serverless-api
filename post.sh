# https://www.freecodecamp.org/news/quickly-create-a-serverless-restful-api-with-nodejs-and-aws-lambda-api-gateway-and-a6be891cc16a/

curl -i \
  -H "Accept: application/json" \
  -H "X-HTTP-Method-Override: PUT" \
  -X POST -d "email":"skumar124@gmail.com" \
  https://0hvlwe0scd.execute-api.us-east-2.amazonaws.com/prod/users/124/hello
