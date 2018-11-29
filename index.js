const express = require('express');
const graphqlHTTP = require('express-graphql');

const googleClient = require('./googleAuth').getAuthClient();

const app = express();

app.use('/graphql', graphqlHTTP({}));

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});