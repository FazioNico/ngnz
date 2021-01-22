
import * as copy from 'copy-to-clipboard';

export interface NzCopyToClopboardOptions {
  handler?: (text: string) => void;
}

export const nzCopyToClipboard = (text: string, ops: NzCopyToClopboardOptions) => {
  const result = copy(text);
  if (result && !ops?.handler) {
    alert('copied!');
  }
  if (result && ops?.handler) {
    ops?.handler?.(text)
  }
  return result;
}
