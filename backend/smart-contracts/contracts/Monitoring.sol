// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Monitoring {
    struct Metric {
        uint256 id;
        string metricName;
        uint256 value;
        uint256 timestamp;
    }

    mapping(uint256 => Metric) private metrics;
    uint256 private metricCounter;

    event MetricRecorded(uint256 id, string metricName, uint256 value, uint256 timestamp);

    function recordMetric(string memory metricName, uint256 value, uint256 timestamp) public returns (uint256) {
        metricCounter++;
        metrics[metricCounter] = Metric(metricCounter, metricName, value, timestamp);
        emit MetricRecorded(metricCounter, metricName, value, timestamp);
        return metricCounter;
    }

    function getMetric(uint256 id) public view returns (string memory metricName, uint256 value, uint256 timestamp) {
        Metric memory metric = metrics[id];
        return (metric.metricName, metric.value, metric.timestamp);
    }
}
