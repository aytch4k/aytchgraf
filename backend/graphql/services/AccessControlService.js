const { ethers } = require('ethers');
const AccessControlABI = require('../abis/AccessControl.json'); // ABI of AccessControl.sol

const provider = new ethers.providers.JsonRpcProvider(process.env.HEDERA_RPC_URL);
const contractAddress = process.env.ACCESS_CONTROL_CONTRACT; // Deployed contract address
const contract = new ethers.Contract(contractAddress, AccessControlABI, provider);

const AccessControlService = {
  async getAccessRules(role) {
    const ruleCount = await contract.ruleCounter();
    const rules = [];
    for (let i = 1; i <= ruleCount; i++) {
      const rule = await contract.getAccessRule(i);
      if (rule[0] === role) {
        rules.push({ id: i, role: rule[0], resource: rule[1], permission: rule[2] });
      }
    }
    return rules;
  },

  async addAccessRule(role, resource, permission) {
    const signer = provider.getSigner();
    const tx = await contract.connect(signer).addAccessRule(role, resource, permission);
    await tx.wait();
    return { success: true };
  },

  async removeAccessRule(ruleId) {
    const signer = provider.getSigner();
    const tx = await contract.connect(signer).removeAccessRule(ruleId);
    await tx.wait();
    return { success: true };
  },
};

module.exports = AccessControlService;
