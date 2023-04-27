import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { VendingMachine, VendingMachine__factory } from '../typechain-types';

interface DeployFixture {
    vendingMachine: VendingMachine;
}

describe('VendingMachine', function (): void {
    async function deployFixture(): Promise<DeployFixture> {
        const VendingMachine: VendingMachine__factory =
                await ethers.getContractFactory('VendingMachine'),
            vendingMachine: VendingMachine = await VendingMachine.deploy();
        return { vendingMachine };
    }

    describe('Deployment', function (): void {
        it('Should be deployed', async function (): Promise<void> {
            const { vendingMachine } = await loadFixture(deployFixture);
            expect(vendingMachine).to.haveOwnProperty('address');
        });
    });
});
