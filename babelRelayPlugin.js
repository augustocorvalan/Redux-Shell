// var babelRelayPlugin   = require('babel-relay-plugin');
// var introspectionQuery = require('graphql/utilities').introspectionQuery;
// var request            = require('sync-request');

// var graphqlHubUrl = 'https://poz39rx0d7.execute-api.us-west-2.amazonaws.com/dev/graphql';
// var response = request('GET', graphqlHubUrl, {
//   qs: {
//     query: introspectionQuery
//   }
// });

// var schema = JSON.parse(response.body.toString('utf-8'));

// console.log('haaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAA');
// console.log(schema);

// module.exports = babelRelayPlugin(schema.data, {
//   abortOnError: true,
// });