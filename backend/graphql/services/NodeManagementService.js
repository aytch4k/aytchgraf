pragma solidity ^0.8.0;

contract NodeManager {
    struct Node {
        string label;
        string properties;
    }

    mapping(uint256 => Node) private nodes;

    function createNode(uint256 id, string memory label, string memory properties) public {
        nodes[id] = Node(label, properties);
    }

    function getNode(uint256 id) public view returns (string memory label, string memory properties) {
        Node memory node = nodes[id];
        return (node.label, node.properties);
    }
}
