import { ethers, upgrades } from 'hardhat';
import { Contract } from 'ethers';
import { VendingMachineV1__factory } from '../typechain-types';
const { deployProxy, erc1967 } = upgrades;

async function main(): Promise<void> {
    const VendingMachineV1: VendingMachineV1__factory =
            await ethers.getContractFactory('VendingMachineV1'),
        proxy: Contract = await deployProxy(VendingMachineV1, [100]);
    await proxy.deployed();

    const implementationAddress: string =
        await erc1967.getImplementationAddress(proxy.address);

    console.log(`Proxy contract address: ${proxy.address}`);
    console.log(`Implementation contract address: ${implementationAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
