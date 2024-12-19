// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rewards {
    struct Reward {
        uint256 id;
        address user;
        string description;
        uint256 value;
        bool redeemed;
    }

    mapping(uint256 => Reward) private rewards;
    uint256 private rewardCounter;

    event RewardCreated(uint256 id, address user, string description, uint256 value);
    event RewardRedeemed(uint256 id);

    function createReward(address user, string memory description, uint256 value) public returns (uint256) {
        rewardCounter++;
        rewards[rewardCounter] = Reward(rewardCounter, user, description, value, false);
        emit RewardCreated(rewardCounter, user, description, value);
        return rewardCounter;
    }

    function getReward(uint256 id) public view returns (address user, string memory description, uint256 value, bool redeemed) {
        Reward memory reward = rewards[id];
        return (reward.user, reward.description, reward.value, reward.redeemed);
    }

    function redeemReward(uint256 id) public {
        require(!rewards[id].redeemed, "Reward already redeemed");
        rewards[id].redeemed = true;
        emit RewardRedeemed(id);
    }
}
