// 引入pinia
import { createPinia } from 'pinia'
//引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 创建pinia实例
const store = createPinia()
store.use(piniaPluginPersistedstate)
// 导出
export default store
