import type { PersistenceOptions } from 'pinia-plugin-persistedstate'

/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaLocalPersistConfig = (key: string, pick?: string[]) => {
  const persist: PersistenceOptions = {
    // 存储名称
    key,
    // 持久化的方式localStorage | sessionStorage
    storage: localStorage,
    // 用于指定 state 中哪些数据需要被持久化
    pick
  }
  return persist
}

const piniaSessionPersistConfig = (key: string, pick?: string[]) => {
  const persist: PersistenceOptions = {
    // 存储名称
    key,
    // 持久化的方式localStorage | sessionStorage
    storage: sessionStorage,
    // 用于指定 state 中哪些数据需要被持久化
    pick
  }
  return persist
}

export { piniaLocalPersistConfig, piniaSessionPersistConfig }
