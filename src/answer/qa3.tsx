/* 类型编程-条件判断 */

export declare type Person<T extends "User" | "Admin"> = T extends "User"
  ? {
      username: string;
    }
  : {
      username: string;
      role: string;
    };

const user: Person<"User"> = { username: "xiaoming" }; // OK

const admin: Person<"Admin"> = { username: "xiaofang", role: "manager" }; // OK
