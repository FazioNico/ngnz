
import * as copy from 'copy-to-clipboard';

export interface NzCopyToClopboardOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: any) => void;
}

export const DEFAULT_OPTIONS: NzCopyToClopboardOptions = {
  debug: false,
  onCopy: () => alert('copied!')
}

export const nzCopyToClipboard = (text: string, ops: NzCopyToClopboardOptions) => {
  const result = copy(text, {...DEFAULT_OPTIONS, ...ops});
  return result;
}
