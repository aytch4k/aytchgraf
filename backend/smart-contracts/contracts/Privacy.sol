// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Privacy {
    struct PrivacySetting {
        address user;
        string settings;
    }

    mapping(address => PrivacySetting) private privacySettings;

    event PrivacyUpdated(address user, string settings);

    function getPrivacySettings(address user) public view returns (string memory settings) {
        return privacySettings[user].settings;
    }

    function updatePrivacySettings(address user, string memory
