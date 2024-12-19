const IndexingService = require('../services/IndexingService');

const IndexingResolver = {
  Query: {
    getIndexStatus: async (_, { indexId }) => {
      return await IndexingService.getIndexStatus(indexId);
    },
  },
  Mutation: {
    createIndex: async (_, { dataId, indexType }) => {
      return await IndexingService.createIndex(dataId, indexType);
    },
    deleteIndex: async (_, { indexId }) => {
      return await IndexingService.deleteIndex(indexId);
    },
  },
};

module.exports = IndexingResolver;
