'use strict';

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.main = async event => {
  try {
    console.log('here two')
    console.log(event)
    const id = event.body.id
    console.log(id)
    const table = process.env.table;
    var params = {
      TableName: table,
      Key: {id}, 
    };
    console.log('getting item from dynamo')
    console.log(params)
    const result = await docClient.get(params).promise()
    console.log('got result')
    console.log(result)
    return {
      statusCode: 200,
      body: {},
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'step one',
          input: event,
        },
        null,
        2
      ),
    }
  }
}
