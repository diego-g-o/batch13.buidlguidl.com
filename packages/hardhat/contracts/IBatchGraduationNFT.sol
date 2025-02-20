// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchGraduationNFT {
    function setMetadataContract(address metadataContract) external;

    function yourGraduationContractAddress(address) external view returns (address);
}
