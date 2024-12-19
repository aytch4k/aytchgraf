const db = require('../db');

const PrivacyService = {
  async getPrivacySettings(userId) {
    return db.query('SELECT * FROM privacy_settings WHERE user_id = ?', [userId]);
  },

  async updatePrivacySettings(userId, settings) {
    await db.query('UPDATE privacy_settings SET settings = ? WHERE user_id = ?', [
      JSON.stringify(settings),
      userId,
    ]);
    return { success: true, userId, settings };
  },
};

module.exports = PrivacyService;
