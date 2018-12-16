import { here } from 'await-here';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

import { Search } from '../google';
import VideoType from './video';

const RootType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    search: {
      type: new GraphQLList(VideoType),
      args: {
        name: { type: GraphQLString }
      },
      async resolve(__, args) {
        const defaultParams = {
          maxResults: '25',
          part: 'snippet'
        };
        const [
          ,
          {
            data: { items }
          }
        ] = await here(Search.list({ ...defaultParams, q: args.name }));
        return items;
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootType
});
