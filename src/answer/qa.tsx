/* 函数中 this 的使用*/
// 参考 https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function

export const debounce = <F extends (...args: any[]) => void>(
  fn: F,
  delay = 200
) => {
  let timeout: number = 0;
  return function (this: any, ...args: any[]) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as F;
};
