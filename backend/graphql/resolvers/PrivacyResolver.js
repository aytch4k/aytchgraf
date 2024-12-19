const PrivacyService = require('../services/PrivacyService');

const PrivacyResolver = {
  Query: {
    getPrivacySettings: async (_, { userId }) => {
      return await PrivacyService.getPrivacySettings(userId);
    },
  },
  Mutation: {
    updatePrivacySettings: async (_, { userId, settings }) => {
      return await PrivacyService.updatePrivacySettings(userId, settings);
    },
  },
};

module.exports = PrivacyResolver;
