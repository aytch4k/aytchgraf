// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logging {
    struct Log {
        uint256 id;
        string resourceId;
        string level;
        string message;
        uint256 timestamp;
    }

    mapping(uint256 => Log) private logs;
    uint256 private logCounter;

    event LogCreated(uint256 id, string resourceId, string level, string message, uint256 timestamp);

    function createLog(string memory resourceId, string memory level, string memory message, uint256 timestamp) public returns (uint256) {
        logCounter++;
        logs[logCounter] = Log(logCounter, resourceId, level, message, timestamp);
        emit LogCreated(logCounter, resourceId, level, message, timestamp);
        return logCounter;
    }

    function getLog(uint256 id) public view returns (string memory resourceId, string memory level, string memory message, uint256 timestamp) {
        Log memory log = logs[id];
        return (log.resourceId, log.level, log.message, log.timestamp);
    }
}
