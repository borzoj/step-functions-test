'use strict';
const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();

module.exports.main = async event => {
    try {
        console.log('s3 event')
        console.log(event.Records[0].s3.object.key)
        const stateMachineArn = process.env.statemachine_arn;
        const params = {
            stateMachineArn
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
