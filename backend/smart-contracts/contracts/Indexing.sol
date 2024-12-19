// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Indexing {
    struct Index {
        uint256 id;
        uint256 dataId;
        string indexType;
    }

    mapping(uint256 => Index) private indexes;
    uint256 private indexCounter;

    event IndexCreated(uint256 id, uint256 dataId, string indexType);
    event IndexDeleted(uint256 id);

    function createIndex(uint256 dataId, string memory indexType) public returns (uint256) {
        indexCounter++;
        indexes[indexCounter] = Index(indexCounter, dataId, indexType);
        emit IndexCreated(indexCounter, dataId, indexType);
        return indexCounter;
    }

    function getIndex(uint256 id) public view returns (uint256 dataId, string memory indexType) {
        Index memory index = indexes[id];
        return (index.dataId, index.indexType);
    }

    function deleteIndex(uint256 id) public {
        delete indexes[id];
        emit IndexDeleted(id);
    }
}
