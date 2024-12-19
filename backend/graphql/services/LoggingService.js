const LoggingABI = require('../abis/Logging.json');

const loggingContractAddress = process.env.LOGGING_CONTRACT;
const loggingContract = new ethers.Contract(loggingContractAddress, LoggingABI, provider);

const LoggingService = {
  async getLogs(resourceId, level, startTime, endTime) {
    const logCount = await loggingContract.logCounter();
    const logs = [];
    for (let i = 1; i <= logCount; i++) {
      const log = await loggingContract.getLog(i);
      if (
        log.resourceId === resourceId &&
        (!level || log.level === level) &&
        log.timestamp >= startTime &&
        log.timestamp <= endTime
      ) {
        logs.push({
          id: i,
          resourceId: log.resourceId,
          level: log.level,
          message: log.message,
          timestamp: log.timestamp,
        });
      }
    }
    return logs;
  },

  async logEvent(resourceId, level, message) {
    const signer = provider.getSigner();
    const timestamp = Math.floor(Date.now() / 1000); // Current timestamp
    const tx = await loggingContract.connect(signer).createLog(resourceId, level, message, timestamp);
    await tx.wait();
    return { success: true };
  },
};

module.exports = LoggingService;
