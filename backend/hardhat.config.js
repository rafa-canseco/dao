require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_HTTP_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};