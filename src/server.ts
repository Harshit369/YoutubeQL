import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import schema from './schema';

const app: express.Application = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (__, res) => {
  res.redirect('/graphql');
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
