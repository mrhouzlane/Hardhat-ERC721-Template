require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.1",
  mocha: {
    timeout: 400000,
  },
  networks: {
    hardhat: {
      accounts: {
        count: 500,
      }
    }
  }
};
