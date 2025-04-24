<template>
  <el-dialog
    v-model="dialogVisible"
    :title="props.title"
    :width="props.width"
    :fullscreen="props.fullscreen"
    :modal="props.modal"
    :draggable="props.draggable"
    :overflow="props.overflow"
    :center="props.center"
    :align-center="props.alignCenter"
    :destroy-on-close="props.destroyOnclose"
    :before-close="handleClose"
  >
    <!-- 内容 -->
    <slot name="content"></slot>
    <!-- footer -->
    <template #footer v-if="isShowFooter">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
interface Props {
  visible?: boolean
  title?: string
  width?: string
  fullscreen?: boolean
  modal?: boolean
  draggable?: boolean
  overflow?: boolean
  center?: boolean
  alignCenter?: boolean
  destroyOnclose?: boolean
  cancelText?: string
  confirmText?: string
  isShowFooter?: boolean
}
// 子组件接收父组件的值
// withDefaults：设置默认值  defineProps：接收父组件的参数
const props = withDefaults(defineProps<Props>(), {
  visible: false,
  title: 'grace-dialog-title',
  width: '30%',
  fullscreen: false,
  // 是否需要遮罩层
  modal: true,
  // 是否可以拖动
  draggable: true,
  // 是否可以拖动超出可视区
  overflow: false,
  // header、footer是否居中
  center: false,
  // 是否内容居中
  // 主要是设置内容的对齐方式，默认是左对齐
  alignCenter: false,
  // 是否销毁DOM
  destroyOnclose: false,
  // 取消按钮文字
  cancelText: '取消',
  // 确认按钮文字
  confirmText: '确定',
  // 是否显示footer
  isShowFooter: true
})

const dialogVisible = ref(props.visible)

watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal
  }
)

// 关闭弹窗
const handleClose = (done: () => void) => {
  done()
}
</script>

<style lang="scss" scoped></style>
