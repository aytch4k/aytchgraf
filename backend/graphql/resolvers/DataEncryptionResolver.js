const DataEncryptionService = require('../services/DataEncryptionService');

const DataEncryptionResolver = {
  Query: {
    getEncryptionStatus: async (_, { dataId }) => {
      return await DataEncryptionService.getEncryptionStatus(dataId);
    },
  },
  Mutation: {
    encryptData: async (_, { dataId, encryptionType }) => {
      return await DataEncryptionService.encryptData(dataId, encryptionType);
    },
    decryptData: async (_, { dataId }) => {
      return await DataEncryptionService.decryptData(dataId);
    },
  },
};

module.exports = DataEncryptionResolver;
