import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';
const { upgradeProxy, erc1967 } = upgrades,
    { getContractFactory } = ethers,
    proxyAddress: string = '0xB11b81016abE87F23D8A6c81515301e609018164';

async function main(): Promise<void> {
    const VendingMachineV3: ContractFactory = await getContractFactory(
            'VendingMachineV3'
        ),
        upgraded: Contract = await upgradeProxy(proxyAddress, VendingMachineV3),
        implementationAddress: string = await erc1967.getImplementationAddress(
            proxyAddress
        );

    console.log(`The current contract owner is: ${await upgraded.owner()}`);
    console.log(`Implementation contract address: ${implementationAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
