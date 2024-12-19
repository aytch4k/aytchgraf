// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Billing {
    struct Invoice {
        uint256 id;
        address account;
        uint256 amount;
        string description;
        string status;
    }

    mapping(uint256 => Invoice) private invoices;
    uint256 private invoiceCounter;

    event InvoiceCreated(uint256 id, address account, uint256 amount, string description);
    event InvoiceSettled(uint256 id);

    function createInvoice(address account, uint256 amount, string memory description) public returns (uint256) {
        invoiceCounter++;
        invoices[invoiceCounter] = Invoice(invoiceCounter, account, amount, description, "PENDING");
        emit InvoiceCreated(invoiceCounter, account, amount, description);
        return invoiceCounter;
    }

    function getInvoice(uint256 id) public view returns (address account, uint256 amount, string memory description, string memory status) {
        Invoice memory invoice = invoices[id];
        return (invoice.account, invoice.amount, invoice.description, invoice.status);
    }

    function settleInvoice(uint256 id) public {
        require(keccak256(abi.encodePacked(invoices[id].status)) == keccak256(abi.encodePacked("PENDING")), "Invoice already settled");
        invoices[id].status = "PAID";
        emit InvoiceSettled(id);
    }
}
