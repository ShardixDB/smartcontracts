const contract = artifacts.require("./Shardcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(contract, "Shardcoin","SRD",0,10000000);
};
