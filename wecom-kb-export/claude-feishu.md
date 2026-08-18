# 手把手：用 lark-cli 把 AI 连上飞书

> 分类：技术实操 ｜ 标签：飞书  
> 摘要：3 条命令装好 lark-cli，登录授权，第一次从命令行给飞书发消息。私人助手直达 IM，不用开网页。

把 AI 助手连到飞书，等于它能在你常用的 IM 里直接回你。下面是 lark-cli 的最简路径。

## 1. 安装（3 条命令）

npm install -g @larksuite/clinpx skills add larksuite/cli -y -g复制

## 2. 配置凭证

lark-cli config init --new复制

会在后台跑出授权链接，复制到浏览器完成登录。

## 3. 登录并验证

lark-cli auth login --recommendlark-cli auth status复制

## 4. 三层调用方式

- **快捷命令**：`lark-cli calendar +agenda`（直接看日程）

- **API 命令**：结构化读写多维表格/文档

- **通用调用**：`lark-cli api GET /open-apis/...`

## 安全提醒

- 勿放开默认安全配置；机器人作私人助手，**别随便拉群**。

- App Secret 是敏感信息，只存本地文件，不进聊天/仓库。

**真实用处：**每天晨间用脚本读待办清单写飞书日报、发群提醒；AI 标记完成即改飞书状态——详见下一篇《飞书多维表格当时间管理中枢》。
