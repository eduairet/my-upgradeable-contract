// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract VendingMachine {
    address owner;

    constructor() {
        owner = msg.sender;
    }
}
