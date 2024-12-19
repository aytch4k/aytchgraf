// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QueryOptimization {
    struct Query {
        uint256 id;
        string originalQuery;
        string optimizedQuery;
    }

    mapping(uint256 => Query) private queries;
    uint256 private queryCounter;

    event QueryOptimized(uint256 id, string originalQuery, string optimizedQuery);

    function optimizeQuery(string memory originalQuery, string memory optimizedQuery) public returns (uint256) {
        queryCounter++;
        queries[queryCounter] = Query(queryCounter, originalQuery, optimizedQuery);
        emit QueryOptimized(queryCounter, originalQuery, optimizedQuery);
        return queryCounter;
    }

    function getOptimizedQuery(uint256 id) public view returns (string memory originalQuery, string memory optimizedQuery) {
        Query memory query = queries[id];
        return (query.originalQuery, query.optimizedQuery);
    }
}
