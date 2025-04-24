import { RuleConfigCondition, RuleConfigSeverity } from '@commitlint/types'

export default {
  // 使用传统的 changelog 解析器
  parserPreset: 'conventional-changelog-conventionalcommits',
  // Git 提交规则配置
  rules: {
    // 标题不能为空
    'subject-empty': [RuleConfigSeverity.Error, 'never'] as const,
    // 类型必须小写
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    // 类型不能为空
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    // 提交类型必须在预定义的范围内
    'type-enum': [
      RuleConfigSeverity.Error,
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
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]]
  },

  // 交互式提交配置
  prompt: {
    questions: {
      // 提交类型
      type: {
        description: '选择你要提交的类型',
        enum: {
          feat: {
            description: '新增功能',
            title: '新功能',
            emoji: '✨'
          },
          fix: {
            description: '修复缺陷',
            title: '修复',
            emoji: '🐛'
          },
          docs: {
            description: '文档更新',
            title: '文档',
            emoji: '📚'
          },
          style: {
            description: '代码格式（不影响功能，例如空格、分号等格式修正）',
            title: '格式',
            emoji: '💎'
          },
          refactor: {
            description: '代码重构（不包括 bug 修复、功能新增）',
            title: '重构',
            emoji: '📦'
          },
          perf: {
            description: '性能优化',
            title: '性能',
            emoji: '🚀'
          },
          test: {
            description: '添加疏漏测试或已有测试改动',
            title: '测试',
            emoji: '🚨'
          },
          build: {
            description: '构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
            title: '构建',
            emoji: '🛠'
          },
          ci: {
            description: '修改 CI 配置、脚本',
            title: '集成',
            emoji: '⚙️'
          },
          chore: {
            description: '对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
            title: '其他',
            emoji: '♻️'
          },
          revert: {
            description: '回滚 commit',
            title: '回滚',
            emoji: '🗑'
          }
        }
      },
      // 影响范围
      scope: {
        description: '本次提交影响的范围（比如组件或文件名）'
      },
      // 提交说明
      subject: {
        description: '写一个简短的变更描述'
      },
      // 提交详情
      body: {
        description: '提供更详细的变更描述'
      },
      // 是否有破坏性更新
      isBreaking: {
        description: '是否有破坏性更新？'
      },
      // 破坏性更新描述
      breakingBody: {
        description: '破坏性更新需要详细说明'
      },
      // 破坏性更新说明
      breaking: {
        description: '列出破坏性更新的说明'
      },
      // 是否影响某个 issue
      isIssueAffected: {
        description: '此次更改是否影响某个开放的 issue？'
      },
      // issue 相关说明
      issuesBody: {
        description: '如果 issue 被关闭，需要详细说明'
      },
      // issue 关联
      issues: {
        description: '添加 issue 引用（例如："fix #123", "re #123"）'
      }
    }
  }
}
