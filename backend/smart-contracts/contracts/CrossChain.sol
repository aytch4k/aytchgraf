// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChain {
    struct Chain {
        string chainId;
        string status;
    }

    mapping(string => Chain) private chains;

    event ChainStatusUpdated(string chainId, string status);

    function getChainStatus(string memory chainId) public view returns (string memory status) {
        return chains[chainId].status;
    }

    function enableInteroperability(string memory chainId, string memory status) public {
        chains[chainId] = Chain(chainId, status);
        emit ChainStatusUpdated(chainId, status);
    }
}
