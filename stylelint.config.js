export default {
  // 继承推荐规范配置
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order'
  ],
  // 指定不同文件对应的解析器
  overrides: [
    // 针对 Vue/html 文件配置
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    // 针对 CSS/SCSS 文件配置（如项目使用 SCSS）
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  // 自定义规则
  rules: {
    // 用于禁止空的样式源文件（如空 .css 文件或 Vue 中空的 <style> 块）
    'no-empty-source': null,
    // 允许 global 、export 、v-deep等伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep', ':(deep)']
      }
    ]
  }
}
