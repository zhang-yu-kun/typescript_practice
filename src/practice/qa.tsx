/* 函数中 this 的使用*/
// 参考 https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
// 此示例为正确示例，无需修改

export const debounce = <F extends (...args: any[]) => void>(
  fn: F,
  delay = 200
) => {
  let timeout = 0;
  return function (this: any, ...args: any[]) {
    timeout && clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as F;
};
