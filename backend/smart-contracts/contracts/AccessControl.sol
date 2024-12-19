// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    struct AccessRule {
        uint256 id;
        string role;
        string resource;
        string permission;
    }

    mapping(uint256 => AccessRule) private accessRules;
    uint256 private ruleCounter;

    event AccessRuleAdded(uint256 id, string role, string resource, string permission);
    event AccessRuleRemoved(uint256 id);

    function addAccessRule(string memory role, string memory resource, string memory permission) public returns (uint256) {
        ruleCounter++;
        accessRules[ruleCounter] = AccessRule(ruleCounter, role, resource, permission);
        emit AccessRuleAdded(ruleCounter, role, resource, permission);
        return ruleCounter;
    }

    function getAccessRule(uint256 id) public view returns (string memory role, string memory resource, string memory permission) {
        AccessRule memory rule = accessRules[id];
        return (rule.role, rule.resource, rule.permission);
    }

    function removeAccessRule(uint256 id) public {
        delete accessRules[id];
        emit AccessRuleRemoved(id);
    }
}
