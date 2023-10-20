/* 类型编程-条件判断 */
// 此示例为正确示例，无需修改

export declare type Person<T extends "User" | "Admin"> = T extends "User"
  ? {
      username: string;
    }
  : {
      username: string;
      role: string;
    };

const user: Person<"User"> = { username: "xiaoming" };

const admin: Person<"Admin"> = { username: "xiaofang", role: "manager" };
