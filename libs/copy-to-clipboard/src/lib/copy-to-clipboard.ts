import * as copy from 'copy-to-clipboard';

export interface CopyToClopboardOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: any) => void;
}

export const DEFAULT_OPTIONS: CopyToClopboardOptions = {
  debug: false,
  onCopy: () => alert('copied!')
}

export const copyToClipboard = (text: string, ops: CopyToClopboardOptions) => {
  const result = copy(text, {...DEFAULT_OPTIONS, ...ops});
  return result;
}
