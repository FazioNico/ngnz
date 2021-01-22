import { copyToClipboard } from './copy-to-clipboard';

describe('copyToClipboard', () => {
  it('should work', () => {
    expect(copyToClipboard()).toEqual('copy-to-clipboard');
  });
});
