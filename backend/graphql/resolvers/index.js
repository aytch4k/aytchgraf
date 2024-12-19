const AccessControlResolver = require('./AccessControlResolver');
const BillingResolver = require('./BillingResolver');
const CrossChainResolver = require('./CrossChainResolver');
const DataEncryptionResolver = require('./DataEncryptionResolver');
const PrivacyResolver = require('./PrivacyResolver');
const IncentivesResolver = require('./IncentivesResolver');
const RewardsResolver = require('./RewardsResolver');
const IndexingResolver = require('./IndexingResolver');
const QueryOptimizationResolver = require('./QueryOptimizationResolver');
const LoggingResolver = require('./LoggingResolver');
// Add additional resolvers here as needed

module.exports = {
  Query: {
    ...AccessControlResolver.Query,
    ...BillingResolver.Query,
    ...CrossChainResolver.Query,
    ...DataEncryptionResolver.Query,
    ...PrivacyResolver.Query,
    ...IncentivesResolver.Query,
    ...RewardsResolver.Query,
    ...IndexingResolver.Query,
    ...QueryOptimizationResolver.Query,
    ...LoggingResolver.Query,
    // Add additional queries here
  },
  Mutation: {
    ...AccessControlResolver.Mutation,
    ...BillingResolver.Mutation,
    ...CrossChainResolver.Mutation,
    ...DataEncryptionResolver.Mutation,
    ...PrivacyResolver.Mutation,
    ...IncentivesResolver.Mutation,
    ...RewardsResolver.Mutation,
    ...IndexingResolver.Mutation,
    ...QueryOptimizationResolver.Mutation,
    ...LoggingResolver.Mutation,
    // Add additional mutations here
  },
};
