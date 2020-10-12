export const numberPadding = (target: number, length: number) => {
  const strNumber = target.toString();
  if (strNumber.length >= length) {
    return strNumber;
  } else {
    let padding = '';
    for (let i = 0; i < length - strNumber.length; i++, padding += '0');
    return padding + strNumber;
  }
};
