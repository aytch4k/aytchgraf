const CrossChainService = require('../services/CrossChainService');

const CrossChainResolver = {
  Query: {
    getInteroperabilityStatus: async (_, { chainId }) => {
      return await CrossChainService.getInteroperabilityStatus(chainId);
    },
  },
  Mutation: {
    enableInteroperability: async (_, { chainId, configuration }) => {
      return await CrossChainService.enableInteroperability(chainId, configuration);
    },
  },
};

module.exports = CrossChainResolver;
