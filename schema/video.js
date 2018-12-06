const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const IDType = new GraphQLObjectType({
  name: 'id',
  fields: {
    kind: { type: GraphQLString },
    videoId: { type: GraphQLString },
    channelId: { type: GraphQLString },
    playlistId: { type: GraphQLString }
  }
});

const ThumbnailQualityType = new GraphQLObjectType({
  name: 'thumbnailQuality',
  fields: {
    url: { type: GraphQLString },
    width: { type: GraphQLInt },
    height: { type: GraphQLInt }
  }
});

const SnipperThumbnailType = new GraphQLObjectType({
  name: 'thumbnails',
  fields: {
    default: {
      type: ThumbnailQualityType
    },
    medium: {
      type: ThumbnailQualityType
    },
    high: {
      type: ThumbnailQualityType
    }
  }
});

const SnippetType = new GraphQLObjectType({
  name: 'snippet',
  fields: {
    publishedAt: { type: GraphQLString },
    channelId: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    thumbnails: { type: SnipperThumbnailType },
    channelTitle: { type: GraphQLString },
    liveBroadcastContent: { type: GraphQLString }
  }
});

const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    kind: { type: GraphQLString },
    etag: { type: GraphQLString },
    id: { type: IDType },
    snippet: { type: SnippetType }
  })
});

module.exports = VideoType;
