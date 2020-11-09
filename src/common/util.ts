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

export const imagePreload = (imageSources: string[], onProgress?: Function): Promise<void> => {
  const total = imageSources.length;
  let count = 0;

  return Promise.all(
    imageSources.map(source => {
      return new Promise(resolve => {
        const end = () => {
          const percent = (++count / total) * 100;
          typeof onProgress === 'function' && onProgress(percent);
          console.log(`Preloading.. ${percent.toFixed(2)}% (${count}/${imageSources.length})`);
          resolve();
        };

        const img = new Image();
        img.src = source;
        img.onload = end;
        img.onerror = end;
      });
    }),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ).then(() => {});
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

export const assetFrom = (path: string) => require('@/assets/' + path);

export const isDarkmode = () =>
  !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const watchThemeChange = (handler: Function) => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    handler(!!e.matches);
  });
};
