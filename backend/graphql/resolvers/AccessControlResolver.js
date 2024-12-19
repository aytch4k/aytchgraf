const AccessControlService = require('../services/AccessControlService');

const AccessControlResolver = {
  Query: {
    getAccessRules: async (_, args) => {
      return await AccessControlService.getAccessRules(args.role);
    },
  },
  Mutation: {
    addAccessRule: async (_, { role, resource, permission }) => {
      return await AccessControlService.addAccessRule(role, resource, permission);
    },
    removeAccessRule: async (_, { ruleId }) => {
      return await AccessControlService.removeAccessRule(ruleId);
    },
  },
};

module.exports = AccessControlResolver;
