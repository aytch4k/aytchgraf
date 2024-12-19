// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Incentives {
    struct Incentive {
        uint256 id;
        string name;
        string description;
        uint256 value;
    }

    mapping(uint256 => Incentive) private incentives;
    uint256 private incentiveCounter;

    event IncentiveCreated(uint256 id, string name, string description, uint256 value);

    function createIncentive(string memory name, string memory description, uint256 value) public returns (uint256) {
        incentiveCounter++;
        incentives[incentiveCounter] = Incentive(incentiveCounter, name, description, value);
        emit IncentiveCreated(incentiveCounter, name, description, value);
        return incentiveCounter;
    }

    function getIncentive(uint256 id) public view returns (string memory name, string memory description, uint256 value) {
        Incentive memory incentive = incentives[id];
        return (incentive.name, incentive.description, incentive.value);
    }
}
