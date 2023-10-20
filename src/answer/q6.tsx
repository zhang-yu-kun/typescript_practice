/* 属性名不确定的对象 */
/* 将 unkonwn 换成合适的类型以消除错误 */

export type Paths = {
  [key: string]: string;
};
// 等同于
// export type Paths = Record<string, string>;

const paths: Paths = {};

paths.home = "/home"; //OK
paths.settings = "/settings"; //OK
paths.somePath = "/somePath"; //OK
