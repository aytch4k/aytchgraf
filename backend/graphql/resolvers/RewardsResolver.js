const RewardsService = require('../services/RewardsService');

const RewardsResolver = {
  Query: {
    getRewards: async (_, { userId }) => {
      return await RewardsService.getRewards(userId);
    },
  },
  Mutation: {
    redeemReward: async (_, { rewardId }) => {
      return await RewardsService.redeemReward(rewardId);
    },
  },
};

module.exports = RewardsResolver;
