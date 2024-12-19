const db = require('../db');

const IndexingService = {
  async getIndexStatus(indexId) {
    return db.query('SELECT * FROM indexes WHERE id = ?', [indexId]);
  },

  async createIndex(dataId, indexType) {
    const result = await db.query(
      'INSERT INTO indexes (data_id, type) VALUES (?, ?)',
      [dataId, indexType]
    );
    return { id: result.insertId, dataId, indexType };
  },

  async deleteIndex(indexId) {
    await db.query('DELETE FROM indexes WHERE id = ?', [indexId]);
    return { success: true };
  },
};

module.exports = IndexingService;
