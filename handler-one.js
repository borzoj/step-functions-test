'use strict';

const AWS = require('aws-sdk')
const crypto = require('crypto')
const s3 = new AWS.S3()
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.main = async event => {
  try {
    console.log('here one')
    console.log(event)
    const key = event.key;
    const bucket = process.env.bucket;
    const table = process.env.table;
    const id = crypto.randomBytes(16).toString('hex')
    const blob = await s3
      .getObject({ Bucket: bucket, Key: key })
      .promise();
    console.log("got s3 result");
    var params = {
      TableName:table,
      Item:{
          "id": id,
          "hl7": blob.Body.toString('utf-8'),
      }
    }
    console.log("sending to dynamodb")
    const result = await docClient.put(params).promise()
    console.log("sent")
    console.log(result)
    return {
      statusCode: 200,
      body: {id},
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
