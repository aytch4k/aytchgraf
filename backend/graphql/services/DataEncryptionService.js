const Encryption = require('../encryption'); // Encryption helper library

const DataEncryptionService = {
  async getEncryptionStatus(dataId) {
    return Encryption.checkStatus(dataId); // Check encryption status in storage
  },

  async encryptData(dataId, encryptionType) {
    const result = await Encryption.encrypt(dataId, encryptionType);
    return { dataId, encryptionType, result };
  },

  async decryptData(dataId) {
    const result = await Encryption.decrypt(dataId);
    return { dataId, decryptedData: result };
  },
};

module.exports = DataEncryptionService;
