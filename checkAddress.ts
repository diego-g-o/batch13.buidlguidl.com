import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractAt("BatchGraduationNFT", "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be");
  const address = "0x2EdDb96A06A97DafD28805e780a45661639aDe43";
  const result = await contract.yourGraduationContractAddress(address);
  console.log(result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 