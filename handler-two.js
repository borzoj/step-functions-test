'use strict';

module.exports.main = async event => {
    console.log('here two')
    console.log(event)
    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'step two',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
