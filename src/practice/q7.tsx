/* 对象的 key 值 */
/* 将 unkonwn 换成合适的类型以消除错误 */

export const ErrorMessage = {
  0: "success",
  7: "Permission denied",
  9: "Invalid parameters"
  //...
};
export type ErrorCode = unknown;

export const logErrMsg = (code: ErrorCode) => {
  console.log(ErrorMessage[code]);
};
