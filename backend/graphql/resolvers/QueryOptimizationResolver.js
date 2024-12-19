const QueryOptimizationService = require('../services/QueryOptimizationService');

const QueryOptimizationResolver = {
  Query: {
    optimizeQuery: async (_, { query }) => {
      return await QueryOptimizationService.optimizeQuery(query);
    },
  },
};

module.exports = QueryOptimizationResolver;
