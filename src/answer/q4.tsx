/* 类型判断 */
/* 请添加类型判断以消除错误 */

export function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(101); // OK
printId("202"); // OK
