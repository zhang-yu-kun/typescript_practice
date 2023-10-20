/* 类型编程-从基础类型构造新类型 */
/* 请将 unkonwn 换成合适的类型以消除错误 */

export type CustomObject<K extends string | number, T> = { [key in K]: T };

// 1. 示例
// ObjectOfStringValue 对象的值只能为字符串类型
type ObjectOfStringValue = CustomObject<string, string>;
const objOfStringValue: ObjectOfStringValue = {
  h: "hello", // OK
  w: "world" // OK
};

// 2. ObjectOfStringValue
// ObjectOfStringValue 对象的值只能为数字类型
type ObjectOfNumberValue = CustomObject<string, number>;
const objOfNumberValue: ObjectOfNumberValue = {
  a: 100, // OK
  b: 100 // OK
};
const a = objOfNumberValue.a;

// 3. ObjectOfUserValue
type User = {
  username: string;
  age: number;
};
// ObjectOfUserValue 对象的值只能为User类型
type ObjectOfUserValue = CustomObject<string, User>;

const objOfUserValue: ObjectOfUserValue = {
  u1: {
    username: "xiaoming",
    age: 18
  }
};
const { username } = objOfUserValue.u1;
