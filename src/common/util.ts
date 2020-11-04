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

export const scrollTo = (to: number, done: Function) => {
  const element = document.documentElement;
  const perTick = Math.max((to - element.scrollTop) / 10, 5);

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop >= to) {
      done();
    } else {
      scrollTo(to, done);
    }
  }, 10);
};

export const firstCharToUppercase = (value: string) =>
  value.charAt(0).toUpperCase() + value.replace('_', ' ').slice(1);

export const contentFrom = (path: string) => require('@/assets/contents/' + path);
