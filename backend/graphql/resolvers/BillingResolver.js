const BillingService = require('../services/BillingService');

const BillingResolver = {
  Query: {
    getBillingDetails: async (_, { accountId }) => {
      return await BillingService.getBillingDetails(accountId);
    },
  },
  Mutation: {
    createInvoice: async (_, { accountId, amount, description }) => {
      return await BillingService.createInvoice(accountId, amount, description);
    },
    settleInvoice: async (_, { invoiceId }) => {
      return await BillingService.settleInvoice(invoiceId);
    },
  },
};

module.exports = BillingResolver;
