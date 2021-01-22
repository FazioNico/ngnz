
import * as copy from 'copy-to-clipboard';

export interface NzCopyToClopboardOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  handler?: (text: string) => void;
}

export const DEFAULT_OPTIONS: NzCopyToClopboardOptions = {
  debug: false,
}

export const nzCopyToClipboard = (text: string, ops: NzCopyToClopboardOptions) => {
  const result = copy(text, {...DEFAULT_OPTIONS, ...ops});
  if (result && !ops?.handler) {
    alert('copied!');
  }
  if (result && ops?.handler) {
    ops?.handler?.(text)
  }
  return result;
}
