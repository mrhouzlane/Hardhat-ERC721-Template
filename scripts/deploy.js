
const hre = require("hardhat");

async function main() {
  
  const DoodlesAmount = hre.ethers.utils.parseEther("0.1");

  const Doodles = await hre.ethers.getContractFactory("Doodles");
  const doodles = await Doodles.deploy();

  await doodles.deployed();

  console.log("Doodles", doodles.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
