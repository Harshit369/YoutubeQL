const graphql = require('graphql');
const { Youtube } = require('../google');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const defaultParams = {
  type: 'video'
};

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    video: {
      type: VideoType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        // Youtube.list({
        //   params: defaultParams
        // })

        return {
          id: 'one two three',
          name: 'some name',
          genre: 'thriller'
        };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootType
});
