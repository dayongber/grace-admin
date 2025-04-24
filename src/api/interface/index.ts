// 接口返参类型
export interface IResponse {
  code: number
  msg: string
}

export interface IResponseData<T = any> extends IResponse {
  data: T
}

// Login
export interface IReqLoginParam {
  username: string | number
  password: string | number
}
