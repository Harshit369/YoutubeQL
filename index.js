const express = require('express');
const graphqlHTTP = require('express-graphql');
// const session = require('express-session');

const schema = require('./schema/video');

const app = express();
const google = require('./google');
google.authorize();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
