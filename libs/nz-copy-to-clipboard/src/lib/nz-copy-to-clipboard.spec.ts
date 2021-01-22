import { nzCopyToClipboard } from './nz-copy-to-clipboard';

describe('nzCopyToClipboard', () => {
  it('should work', () => {
    expect(nzCopyToClipboard()).toEqual('nz-copy-to-clipboard');
  });
});
