import { defineConfig } from 'cz-git'

export default defineConfig({
  // 继承的配置
  extends: ['@commitlint/config-conventional'],
  // Git 提交规则配置
  rules: {
    // 标题不能为空
    'subject-empty': [2, 'never'],
    // 类型大小写不限制
    'type-case': [0],
    // 类型不能为空
    'type-empty': [2, 'never'],
    // 提交类型必须在预定义的范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'docs', // 文档变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改 CI 配置、脚本
        'revert', // 回滚 commit
        'chore' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ]
    ]
  },

  // 交互式提交配置
  prompt: {
    // 交互提示文案
    messages: {
      type: '选择提交类型：',
      scope: '输入影响范围（可选，如组件名）：',
      subject: '输入简短描述（必填）：',
      body: '输入详细描述（可选）：',
      breaking: '列出破坏性变更（可选）：',
      footer: '列出关联 Issue（可选，如 #123）：',
      confirmCommit: '确认提交？'
    },
    // 提交类型（与 commitlint 的 type-enum 保持一致）
    types: [
      { value: 'feat', name: '✨ feat:     新增功能' },
      { value: 'fix', name: '🐛 fix:      修复缺陷' },
      { value: 'docs', name: '📝 docs:     文档变更' },
      { value: 'style', name: '💄 style:    代码格式调整' },
      { value: 'refactor', name: '♻️ refactor: 代码重构' },
      { value: 'perf', name: '⚡ perf:     性能优化' },
      { value: 'test', name: '✅ test:     测试相关' },
      { value: 'build', name: '📦️ build:    构建流程变更' },
      { value: 'ci', name: '🔧 ci:       持续集成配置' },
      { value: 'revert', name: '⏪ revert:   回退提交' },
      { value: 'chore', name: '🔨 chore:    其他杂项' }
    ]
  },
  useEmoji: false,
  emojiAlign: 'center',
  useAI: false,
  aiNumber: 1,
  themeColorCode: '',
  scopes: [],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlign: 'bottom',
  customScopesAlias: 'custom',
  emptyScopesAlias: 'empty',
  upperCaseSubject: false,
  markBreakingChangeMode: false,
  allowBreakingChanges: ['feat', 'fix'],
  breaklineNumber: 100,
  breaklineChar: '|',
  skipQuestions: [],
  issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
  customIssuePrefixAlign: 'top',
  emptyIssuePrefixAlias: 'skip',
  customIssuePrefixAlias: 'custom',
  allowCustomIssuePrefix: true,
  allowEmptyIssuePrefix: true,
  confirmColorize: true,
  maxHeaderLength: Infinity,
  maxSubjectLength: Infinity,
  minSubjectLength: 0,
  scopeOverrides: undefined,
  defaultBody: '',
  defaultIssues: '',
  defaultScope: '',
  defaultSubject: ''
})
