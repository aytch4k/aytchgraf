const db = require('../db');

const RewardsService = {
  async getRewards(userId) {
    return db.query('SELECT * FROM rewards WHERE user_id = ?', [userId]);
  },

  async redeemReward(rewardId) {
    await db.query('UPDATE rewards SET redeemed = true WHERE id = ?', [rewardId]);
    return { success: true };
  },
};

module.exports = RewardsService;
