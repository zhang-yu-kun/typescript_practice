/* 对象类型的继承 */
// 此示例为正确示例，无需修改

export interface Response {
  data: any;
  status: number;
  statusText: string;
}

// 1. 在 Response 类型的基础上添加 config 属性
export interface ResponseWithConfig extends Response {
  config: any;
}
const responseWithConfig: ResponseWithConfig = {
  data: 100,
  status: 0,
  statusText: "success",
  config: {}
};

// 2. 在 Response 类型的基础上改写 data 属性类型
export interface StringResponse extends Response {
  data: string;
}
const stringResponse: StringResponse = {
  data: "100",
  status: 0,
  statusText: "success"
};
