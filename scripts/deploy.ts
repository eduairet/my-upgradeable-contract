import { ethers } from 'hardhat';
import { VendingMachine__factory, VendingMachine } from '../typechain-types';
const { getContractFactory } = ethers;

async function main(): Promise<void> {
    const VendingMachine: VendingMachine__factory = await getContractFactory(
            'VendingMachine'
        ),
        vendingMachine: VendingMachine = await VendingMachine.deploy();
    await vendingMachine.deployed();
    console.log(`VendingMachine deployed to ${vendingMachine.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
