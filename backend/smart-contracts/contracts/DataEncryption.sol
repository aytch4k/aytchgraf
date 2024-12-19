// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataEncryption {
    struct Encryption {
        uint256 dataId;
        string encryptionType;
        string status;
    }

    mapping(uint256 => Encryption) private encryptions;

    event EncryptionUpdated(uint256 dataId, string encryptionType, string status);

    function getEncryptionStatus(uint256 dataId) public view returns (string memory encryptionType, string memory status) {
        Encryption memory enc = encryptions[dataId];
        return (enc.encryptionType, enc.status);
    }

    function updateEncryption(uint256 dataId, string memory encryptionType, string memory status) public {
        encryptions[dataId] = Encryption(dataId, encryptionType, status);
        emit EncryptionUpdated(dataId, encryptionType, status);
    }
}
