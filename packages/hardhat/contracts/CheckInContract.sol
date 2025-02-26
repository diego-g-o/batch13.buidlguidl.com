//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./BatchRegistry.sol";

contract CheckInContract {
    BatchRegistry public batchRegistry;

    constructor(address _batchRegistryAddress) {
        batchRegistry = BatchRegistry(payable(_batchRegistryAddress));
    }

    function checkIn() public {
        // This will call the BatchRegistry's checkIn function
        // Since this is called from a contract, it will satisfy the senderIsContract modifier
        batchRegistry.checkIn();
    }
}
