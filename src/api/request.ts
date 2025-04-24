import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  AxiosError,
  type AxiosResponse
} from 'axios'
import { useUserStore } from '@/store/modules/user'
import { ElMessage } from 'element-plus'
import { type IResponseData } from '@/api/interface'

// 定义请求类
class RequestInstance {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    // axios实例
    this.instance = axios.create(config)

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const userStore = useUserStore()
        if (userStore.sessionToken) {
          config.headers['Authorization'] = 'Bearer' + userStore.sessionToken
        }
        return config
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code !== 200) {
          if (res.data.msg) {
            ElMessage({
              showClose: true,
              message: res.data.msg,
              type: 'error',
              duration: 3000
            })
          }
        } else {
          return res.data
        }
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )
  }

  // 封装请求方法
  get<T = any>(url: string, params?: object): Promise<IResponseData<T>> {
    return this.instance.get(url, params)
  }
  post<T = any>(url: string, data?: object): Promise<IResponseData<T>> {
    return this.instance.post(url, data)
  }
  put<T = any>(url: string, data?: object): Promise<IResponseData<T>> {
    return this.instance.put(url, data)
  }
  delete<T = any>(url: string): Promise<IResponseData<T>> {
    return this.instance.delete(url)
  }
}

const config = {
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 60000
}

export default new RequestInstance(config)
