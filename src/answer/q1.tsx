/* 常用类型*/
/* 请将 unkonwn 换成合适的类型以消除错误 */

// 1. string 字符串类型
export const str: string = "helloworld";
str.substr(3);

// 2. number 数字类型
let num: number = 100;
num++;

// 3. boolean 布尔类型
const bool: boolean = true;

// 4. 数组类型
const numArr: number[] = [1, 2, 3];
numArr.map((num) => ++num);

// 5. 对象类型
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
const user: User = {
  name: "xiaoming",
  age: 18,
  isAdmin: false
};
const { name, age, isAdmin } = user;

// 6. 函数类型
type Fn = (n: number) => number;
const fn: Fn = (num) => ++num;
fn(1);
