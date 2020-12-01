import axios from 'axios';

/**
 * Fill 0 to specified length of number
 * @param target Target number
 * @param length Number length (fill 0 to target number)
 */
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

/**
 * Load image resource (for Caching)
 * @param imageSources Image source (HTTP GET Path)
 * @param onProgress Call each loaded
 */
export const imagePreload = (imageSources: string[], onProgress?: Function): Promise<void> => {
  const total = imageSources.length;
  let count = 0;

  return Promise.all(
    imageSources.map(source => {
      return new Promise<void>(resolve => {
        const end = () => {
          const percent = (++count / total) * 100;
          typeof onProgress === 'function' && onProgress(percent);
          console.log(
            `Preloading.. ${percent.toFixed(2)}% (${count}/${imageSources.length}): ${source}`,
          );
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

/**
 * Scroll to target position
 * @param to Position of scroll end
 * @param done On finished callback function
 */
export const scrollTo = (to: number, done: Function) => {
  const element = document.documentElement;
  const perTick = Math.max((to - element.scrollTop) / 10, 5);

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    element.scrollTop >= to ? done() : scrollTo(to, done);
  }, 10);
};

/**
 * Make first letter to uppercase
 * @param value Text
 */
export const firstCharToUppercase = (value: string) =>
  value.charAt(0).toUpperCase() + value.replace('_', ' ').slice(1);

/**
 * Load asset from src/assets
 * @param path Asset path
 */
export const assetFrom = (path: string) => require('@/assets/' + path);

/**
 * Check user color theme is dark
 */
export const isDarkmode = () =>
  !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * Register user theme change event
 * @param handler Handler function
 */
export const watchThemeChange = (handler: Function) => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    handler(!!e.matches);
  });
};

/**
 * Open target url page
 * @param target URL
 * @param newTab Open as new tab flag (default: true)
 */
export const openPage = (target: string, newTab = true) => {
  if (newTab) {
    window.open(target, '_blank');
  } else {
    location.href = target;
  }
};

/**
 * Get target repository's star count
 * @param username Github username
 * @param repository Githun repository
 */
export const getRepositoryStar = (username: string, repository: string) =>
  axios
    .get(`https://api.github.com/repos/${username}/${repository}`)
    .then(res => res.data['stargazers_count'] as number)
    .catch(() => -1);
