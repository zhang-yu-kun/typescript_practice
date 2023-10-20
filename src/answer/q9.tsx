/* 部分对象 Partial */
/* 将 Criteria 声明为正确的类型 */

interface User {
  name: string;
  age: number;
  occupation: string;
}
export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep"
  },
  {
    name: "Wilson",
    age: 23,
    occupation: "Ball"
  }
];

type Criteria = {
  [Property in keyof User]?: User[Property];
};
// 等同于
// type Criteria = Partial<User>;

export const filterUsers = (users: User[], criteria: Criteria): User[] =>
  users.filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Criteria)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });

const usersOfAge23 = filterUsers(users, {
  age: 23
});
