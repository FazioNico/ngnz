export interface NzCopyToClopboardOptions {
  handler?: (text: string) => void;
}

const _ngnz_copy = async (text: string) => {
  // use native js window function to copy text to clipboard
  if (!navigator?.clipboard) {
    throw '[ERROR] navigator.clipboard not supprot in browser'
  }
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
};

export const nzCopyToClipboard = async (text: string, ops: NzCopyToClopboardOptions) => {
  const result = await _ngnz_copy(text);
  if (result && !ops?.handler) {
    alert('copied!');
  }
  // if user specify handler option run function
  if (result && ops?.handler) {
    ops?.handler?.(text)
  }
  // return result boolean
  return result;
}
