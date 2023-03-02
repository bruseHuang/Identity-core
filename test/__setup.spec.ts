import { use } from 'chai';
import { Signer } from 'ethers';
import hre from 'hardhat';
import { solidity } from 'ethereum-waffle';
import { takeSnapshot, revertToSnapshot } from './utils';

use(solidity);

export let accounts: Signer[];
export let deployer: Signer;
export let user: Signer;

export function makeSuiteCleanRoom(name: string, tests: () => void) {
  describe(name, () => {
    beforeEach(async function () {
      await takeSnapshot();
    });
    tests();
    afterEach(async function () {
      await revertToSnapshot();
    });
  });
}

before(async () => {
  accounts = await hre.ethers.getSigners();
  deployer = accounts[0];
  user = accounts[1];
});
