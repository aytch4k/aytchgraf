const LoggingService = require('../services/LoggingService');

const LoggingResolver = {
  Query: {
    getLogs: async (_, { resourceId, level, startTime, endTime }) => {
      return await LoggingService.getLogs(resourceId, level, startTime, endTime);
    },
  },
  Mutation: {
    logEvent: async (_, { resourceId, level, message }) => {
      return await LoggingService.logEvent(resourceId, level, message);
    },
  },
};

module.exports = LoggingResolver;
