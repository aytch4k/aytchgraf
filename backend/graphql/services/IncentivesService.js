const db = require('../db');

const IncentivesService = {
  async getIncentiveDetails(incentiveId) {
    return db.query('SELECT * FROM incentives WHERE id = ?', [incentiveId]);
  },

  async createIncentive(name, description, value) {
    const result = await db.query(
      'INSERT INTO incentives (name, description, value) VALUES (?, ?, ?)',
      [name, description, value]
    );
    return { id: result.insertId, name, description, value };
  },
};

module.exports = IncentivesService;
