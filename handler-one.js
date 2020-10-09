'use strict';

module.exports.main = async event => {
  console.log('here one')
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'step one',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
