"use strict";

var AWS = require('aws-sdk');

// Get "Hello" Dynamo table name.  Replace DEFAULT_VALUE 
// with the actual table name from your stack.
const helloDBArn = process.env['HELLO_DB'] || 'DEFAULT_VALUE';  //'Mark-HelloTable-1234567';
const helloDBArnArr = helloDBArn.split('/');
const helloTableName = helloDBArnArr[helloDBArnArr.length - 1];

// handleHttpRequest is the entry point for Lambda requests
exports.handleHttpRequest = function(request, context, done) {
  try {
    const iotId = request.pathParameters.iotId;
    let response = {
      headers: {},
      body: '',
      statusCode: 200
    };

    switch (request.httpMethod) {
      case 'GET': {
        console.log('GET');
        let dynamo = new AWS.DynamoDB();
        var params = {
          TableName: helloTableName,
          Key: { 'iot_id' : { S: iotId } },
          ProjectionExpression: 'weight'
        };
        // Call DynamoDB to read the item from the table
        dynamo.getItem(params, function(err, data) {
          if (err) {
            console.log("Error", err);
            throw `Dynamo Get Error (${err})`
          } else {
            console.log("Success", data.Item.email);
            response.body = JSON.stringify(data.Item.weight);
            done(null, response);
          }
        });
        break;
      }
    }
  } catch (e) {
    done(e, null);
  }
}
