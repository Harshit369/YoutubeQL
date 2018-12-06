const { here } = require('await-here');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const { Youtube } = require('../google');
const VideoType = require('./video');

const RootType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    videos: {
      type: new GraphQLList(VideoType),
      args: {
        name: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const defaultParams = {
          maxResults: '25',
          part: 'snippet'
        };
        const [
          ,
          {
            data: { items }
          }
        ] = await here(Youtube.list({ ...defaultParams, q: args.name }));
        return items;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootType
});
