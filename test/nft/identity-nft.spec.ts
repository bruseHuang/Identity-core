import { expect } from 'chai';
import { makeSuiteCleanRoom } from '../__setup.spec';

makeSuiteCleanRoom('Identity NFT', () => {
  context('Generic', () => {
    it('test', async () => {
      expect(true).to.equal(true);
    });
  });
});
