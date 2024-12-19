const IncentivesService = require('../services/IncentivesService');

const IncentivesResolver = {
  Query: {
    getIncentiveDetails: async (_, { incentiveId }) => {
      return await IncentivesService.getIncentiveDetails(incentiveId);
    },
  },
  Mutation: {
    createIncentive: async (_, { name, description, value }) => {
      return await IncentivesService.createIncentive(name, description, value);
    },
  },
};

module.exports = IncentivesResolver;
