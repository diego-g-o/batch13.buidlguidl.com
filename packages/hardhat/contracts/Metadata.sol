// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./IBatchGraduationNFT.sol";

contract Metadata {
    string constant MYNAME = "Diego Gil";
    uint8 constant COLOR1 = 0;
    uint8 constant COLOR2 = 0;
    uint8 constant COLOR3 = 0;

    IBatchGraduationNFT public batchGraduationNFT;

    constructor(address batchGraduationNFTAddress) {
        batchGraduationNFT = IBatchGraduationNFT(batchGraduationNFTAddress);
    }

    function getName() external view returns (string memory) {
        return MYNAME;
    }

    function getColor() external view returns (uint8, uint8, uint8) {
        return (COLOR1, COLOR2, COLOR3);
    }

    function callBatchGraduationNFT() public {
        batchGraduationNFT.setMetadataContract(address(this));
    }

    function checkBatchGraduationNFT(address addressToTest) external view returns (address savedMetadataContract) {
        return batchGraduationNFT.yourGraduationContractAddress(addressToTest);
    }
}
