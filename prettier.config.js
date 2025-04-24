const config = {
  // 指定缩进方式，空格或tab，默认false，即使用空格
  useTabs: false,
  // 缩进空格数，默认2个空格
  tabWidth: 2,
  // 每行最多字符数量，超出换行(默认80)
  printWidth: 120,
  // 使用单引号 (true:单引号;false:双引号)
  singleQuote: true,
  // 元素末尾是否加逗号 (none:不加,es5:加在es5中,all:都加)
  trailingComma: 'none',
  // 结尾添加分号
  semi: false,
  // 行结尾形式 mac和linux是\n  windows是\r\n
  endOfLine: 'auto',
  // 单个参数的箭头函数不加括号 x => x
  arrowParens: 'avoid',
  // 对象大括号内两边是否加空格 { a:0 }
  bracketSpacing: true
}

export default config
