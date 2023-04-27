import { HardhatUserConfig } from 'hardhat/config';
import { config as dotenvConfig } from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
dotenvConfig();
const { SEPOLIA_URL, PRIV_KEY, ETHERSCAN_KEY } = process.env;

const config: HardhatUserConfig = {
    solidity: '0.8.18',
    networks: {
        sepolia: {
            url: SEPOLIA_URL,
            accounts: PRIV_KEY ? [PRIV_KEY] : undefined,
        },
    },
    etherscan: { apiKey: ETHERSCAN_KEY },
};

export default config;
