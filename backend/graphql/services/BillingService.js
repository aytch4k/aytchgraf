const BillingABI = require('../abis/Billing.json');

const billingContractAddress = process.env.BILLING_CONTRACT;
const billingContract = new ethers.Contract(billingContractAddress, BillingABI, provider);

const BillingService = {
  async getBillingDetails(accountId) {
    const invoiceCount = await billingContract.invoiceCounter();
    const invoices = [];
    for (let i = 1; i <= invoiceCount; i++) {
      const invoice = await billingContract.getInvoice(i);
      if (invoice[0] === accountId) {
        invoices.push({
          id: i,
          accountId: invoice[0],
          amount: ethers.utils.formatEther(invoice[1]),
          description: invoice[2],
          status: invoice[3],
        });
      }
    }
    return invoices;
  },

  async createInvoice(accountId, amount, description) {
    const signer = provider.getSigner();
    const tx = await billingContract.connect(signer).createInvoice(
      accountId,
      ethers.utils.parseEther(amount.toString()),
      description
    );
    await tx.wait();
    return { success: true };
  },

  async settleInvoice(invoiceId) {
    const signer = provider.getSigner();
    const tx = await billingContract.connect(signer).settleInvoice(invoiceId);
    await tx.wait();
    return { success: true };
  },
};

module.exports = BillingService;
