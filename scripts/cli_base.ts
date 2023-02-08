import hre from 'hardhat';
declare const global: any;

async function loadBaseUtils() {
  var me = (await hre.ethers.getSigners())[0];
  console.log(me.address);

  genExFunc();
  balanceFunc();

  console.log(
    `current chain is ${hre.network.name}, chainID = ${hre.network.config.chainId}`
  );

  const { addr, balance } = await getGlobalAssetBalance();
  console.log(`current signer is ${addr}, native asset balance = ${balance}`);
}

function genExFunc() {
  const BigNumber = require('bignumber.js');

  for (let i = 0; i <= 18; i++) {
    global[`e${i}`] = (val: any) => {
      let readable = new BigNumber(val.toString()).shiftedBy(-i).toFixed();
      console.log(readable);
    };
  }
}

async function getGlobalAssetBalance() {
  const BigNumber = require('bignumber.js');

  var me = (await hre.ethers.getSigners())[0];
  let rawBalance = await me.getBalance();
  let readable = new BigNumber(rawBalance.toString()).shiftedBy(-18).toFixed();
  return {
    addr: me.address,
    balance: readable,
  };
}

function balanceFunc() {
  global['balance'] = async () => {
    const { addr, balance } = await getGlobalAssetBalance();

    console.log(`${addr} native asset balance: ${balance}`);
  };
}

export default loadBaseUtils;
