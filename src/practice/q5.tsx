/* 类型断言 */
/* 请添加合适的类型断言以消除错误 */

export type Position = "left" | "right" | "top" | "bottom";
const setPos = (pos: Position) => {
  //...
};

const handleChange = (value: string) => {
  setPos(value); //提示：此处应做类型断言
};

handleChange("left");
