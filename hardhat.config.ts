import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import { HardhatUserConfig } from 'hardhat/config';
import { readFileSync } from 'fs';
import { CHAIN } from './constants';
import 'solidity-coverage';

const privateKey = readFileSync('.private_key', 'utf-8');

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.16',
            },
            {
                version: '0.8.10',
            },
            {
                version: '0.4.17',
            },
        ],
    },
    defaultNetwork: 'EthereumGoerli',
    networks: {
        [CHAIN.EthereumGoerli]: {
            url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            chainId: 5,
            accounts: [privateKey],
            // gasPrice: 20000000000,
        },
        [CHAIN.BNBChainTest]: {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            chainId: 97,
            accounts: [privateKey],
        },
    },
};

export default config;
