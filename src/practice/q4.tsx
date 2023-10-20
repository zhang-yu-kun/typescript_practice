/* 类型判断 */
/* 请添加类型判断以消除错误 */

export function printId(id: string | number) {
  console.log(id.toUpperCase()); //提示：toUpperCase 是 string 类型变量的属性
}
printId(101); // OK
printId("202"); // OK
