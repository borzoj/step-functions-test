'use strict';
const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();

module.exports.main = async event => {
    try {
        console.log('s3 event')
        const key  = event.Records[0].s3.object.key 
        console.log(key)
        const params = {
            input: JSON.stringify({key}),
            stateMachineArn: process.env.statemachine_arn,
        }
        console.log(params)
        const result = await stepfunctions.startExecution(params).promise()
        console.log('executed')
        console.log(result)
    } catch (err) {
        console.log('error')
        console.log(err)
   }
};
