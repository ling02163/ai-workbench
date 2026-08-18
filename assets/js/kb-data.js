/* 知识库数据源 —— 内容来自玲姐《售后 AI 工作台》手册 + 阿宝姐课程 AI 素材库
   由 kb.js 读取并渲染列表与详情页。所有内容忠实于用户原文/课程素材。 */
const KNOWLEDGE_BASE = [
  {
    slug: "choose-tools",
    no: "01",
    title: "新手第一步 · 选对工具",
    subtitle: "入门 · 零成本起步",
    tag: "入门",
    category: "售后AI工作台",
    featured: true,
    summary: "别急着花钱。先装好「平台 + 输入法」两样，把感觉找到，再决定要不要升级。",
    html: `
<h2>先装什么（清单）</h2>
<p>两个就够起步：</p>
<ul>
<li><strong>WorkBuddy</strong>：智能体平台，接入各家模型，可按需切换；新手先用免费额度练手。</li>
<li><strong>微信输入法</strong>：带语音输入，长需求按住说话比手打快好几倍。</li>
</ul>
<h2>选什么模型（话术）</h2>
<ul>
<li>有<strong>免费模型</strong>先用免费：比如 HY3 在 8 月 31 日前是免费的，先练手、零成本；</li>
<li>没有免费，首选 <strong>DeepSeek</strong>——文职、销售场景的「性价比之王」，日常够用还便宜。</li>
</ul>
<blockquote class="tip"><strong>我自己的用法：</strong>日常主力就是 DeepSeek，写材料、理需求、做分析，文职场景完全够用；把贵的模型留给真正要深度的活，省钱又不耽误事。</blockquote>
<h2>为什么一定要装语音输入法？</h2>
<p>日常跟 AI 聊需求常常是一大段话，全靠手打又慢又累、思路还容易断。习惯是：<strong>长需求直接用微信输入法按住说话</strong>，它把话转成文字丢给 AI，比手打快好几倍，还能逼自己把逻辑说清楚。</p>
<blockquote class="scene"><strong>场景：</strong>同事跑来要我发封邮件给产品部。我不用自己整理、也不用打字——打开免费网页版（DeepSeek / 豆包都行），按住微信输入法把需求口述清楚（「我要发邮件给产品部，说……希望简短一点」）→ 直接出稿，复制粘贴就能发。</blockquote>
`
  },
  {
    slug: "know-you",
    no: "02",
    title: "把 AI 变成「懂你」的助手",
    subtitle: "基建 · 让 AI 先了解你",
    tag: "基建",
    category: "售后AI工作台",
    featured: false,
    summary: "AI 不是搜索引擎，它是在「你的工作逻辑」上提效。先让它认识你，以后每次对话都少解释一遍。",
    html: `
<h2>建一个 AI 专用文件夹</h2>
<p>本机建一个 AI 总目录，按项目建子文件夹；对接客户的，再按客户分文件夹。东西不乱，AI 也好找。</p>
<h2>写一份「DNA」文件</h2>
<p>这是让 AI 先懂你的核心文件，至少写清三块：</p>
<ul>
<li><strong>岗位职责</strong>——你是做什么的、负责哪摊事；</li>
<li><strong>公司介绍</strong>——公司是干什么的、有哪些业务线；</li>
<li>你的<strong>环境</strong>（团队/领导/客户是谁）和<strong>偏好</strong>（怎么命名文件、对产出有什么要求）。</li>
</ul>
<p>作用：以后每次对话都少解释一遍。</p>
<h2>建「全局记忆」</h2>
<p>把长期有用的信息写进一份长期记忆文件；换不同 AI 工具时都能继承，不用重复讲背景。</p>
<h2>双平台打通</h2>
<p>在常用工具里各留一份相同的记忆软链接，换平台也不丢上下文——「不会做就问 AI 怎么打通」。</p>
`
  },
  {
    slug: "communication-rules",
    no: "03",
    title: "跟 AI 沟通的 3 个铁律",
    subtitle: "心法 · 少踩坑",
    tag: "心法",
    category: "售后AI工作台",
    featured: false,
    summary: "同样的 AI，会聊和不会聊，产出天差地别。这三条是反复踩坑后总结的。",
    html: `
<p>同样的 AI，会聊和不会聊，产出天差地别。这三条是反复踩坑后总结的。</p>
<h2>铁律一：先别动手</h2>
<p>信息没说完前，先告诉 AI「你先别做，只帮我记，说完我们再讨论」。国产模型容易抢跑先生成，这句话能救你。</p>
<div class="prompt-box">你先别做，只帮我记，说完我们再讨论。<button class="copy">复制</button></div>
<h2>铁律二：需求拆细</h2>
<p>别一股脑倒需求。先用免费模型把需求拆成几块，逐块聊清（配合举例），再交给能出文件的工具。</p>
<h2>铁律三：养成「检测」的习惯</h2>
<p>不管 AI 帮你做了什么，<strong>都要养成交付前检测一遍的习惯</strong>。AI 以为的「做好了」，和你真正要的，常常有偏差；这种偏差往往要等你实际检测时才发现。AI 默认容易只查代码层、不查最终成型的结果，所以检测时要明确让它「连生成结果一起检查」。</p>
<blockquote class="tip">标准协作流：<strong>免费模型梳理 → 付费工具生成 → 人工自测</strong>。每一步都别省。</blockquote>
`
  },
  {
    slug: "repeat-to-tool",
    no: "04",
    title: "实战 · 把重复工作变成工具",
    subtitle: "落地 · 看得见的速度",
    tag: "落地",
    category: "售后AI工作台",
    featured: true,
    summary: "重复活最该交给 AI。难点从来不是「写代码」，而是「把需求说清楚」。",
    html: `
<p>重复活最该交给 AI。难点从来不是「写代码」，而是「把需求说清楚」。</p>
<blockquote class="scene"><strong>真实案例：</strong>帮财务同事做的续费对账工具——把多张格式不同的表按列合并、算出超期天数、自动拆分分发，原来要耗掉一整个工作日，现在几十秒。同类做法也用在网点梳理：系统导出的上千个网点常有重复/不准，先按规则梳理成通用模板，同事下次只丢 Excel 给 AI 即出结果。</blockquote>
<h2>做工具五步法（以财务续费对账为例）</h2>
<ol>
<li><strong>先用免费 AI 梳理需求</strong>：开场说清目的，并强调「先别动手，等我输出完，把疑问沟通清楚再操作」。</li>
<li><strong>把大需求拆成小步骤，逐个聊清</strong>：以财务为例拆成 3 个小需求，每个单独聊、举例、循环答疑——① 从三张格式不同的表里把所需数据摘出来；② 把数据算成想要的指标；③ 按固定格式拆分、发给各部门负责人和老板。</li>
<li><strong>让免费 AI 产出一份 Markdown 需求文档</strong>：三个小需求聊清楚后，让它整理成 Markdown——这就是后面投喂给付费 AI 的「说明书」。</li>
<li><strong>把需求文档 + 数据，丢给付费 AI 生成工具</strong>：换 AI 要重申「先熟悉资料、疑问沟通清楚再动手」；免费 AI 也能做，只是付费更稳。</li>
<li><strong>边做边存记忆、持续优化，并考虑同事环境</strong>：让 AI 阶段性保存记忆过程；给同事用的，要出 <strong>Windows 免安装（无依赖）版</strong>，带「上传/开始/清除」按钮和好看界面。</li>
</ol>
`
  },
  {
    slug: "keep-improving",
    no: "05",
    title: "让 AI 持续变强",
    subtitle: "进化 · 越用越懂你",
    tag: "进化",
    category: "售后AI工作台",
    featured: false,
    summary: "AI 是可以「训练」的。喂得越多、越准，产出越贴近你的标准。把客户的「严谨度」变成 AI 的出厂设置。",
    html: `
<p>AI 是可以「训练」的。喂得越多、越准，它产出越贴近你的标准。最实用的一招，是把客户反复改稿磨出来的「严谨度」，变成 AI 的出厂设置。</p>
<h2>文案反哺四步法（直接用）</h2>
<ol>
<li><strong>存终稿</strong>：把客户改了多版、最终认可的文案整份存好，这是「标准答案」。</li>
<li><strong>喂给 AI 学</strong>：把终稿丢给 AI，让它学习这份的严谨度、逻辑线和措辞习惯。</li>
<li><strong>让它反建议</strong>：问它「要不要做成模板固定下来」——它通常会帮你把套路固化。</li>
<li><strong>沉淀复用</strong>：固化成模板/知识库；下次写同类材料只丢新需求，AI 直接套标准出稿。</li>
</ol>
<blockquote class="scene"><strong>场景：把客户改了 8 版的方案「喂」成模板。</strong>客户一份整改方案来回改了 8 版才点头 → 把最终版整份丢给 AI：「学这份的严谨度和逻辑，以后类似方案按这个标准写」→ 再问「要不要做成模板固定」→ 固化后，下次同事只丢新需求，AI 直接按标准出稿。</blockquote>
<p>同理可<strong>喂课程/方法论</strong>、<strong>喂「终稿」学严谨</strong>、<strong>反哺成模板</strong>。换输入，这套流水线就能套到任何重复场景。</p>
`
  },
  {
    slug: "work-rhythm",
    no: "06",
    title: "我的日常 · 开工 / 收工",
    subtitle: "习惯 · 每天自动复盘",
    tag: "习惯",
    category: "售后AI工作台",
    featured: false,
    summary: "每天说「开工」列任务，说「收工」做复盘。等于多了一个不用发工资的搭档，每天帮你收口。",
    html: `
<p>这是一份「技能」（不是单独装的软件）：每天说「开工」，它把今日任务发给我；说「收工」，它给我做当日复盘。体验跟一个工具一模一样。</p>
<h2>开工</h2>
<p>打开电脑说一句「开工」，今日待办和优先级自动弹出来，心里有数再动手。</p>
<h2>收工</h2>
<p>做完说「收工」，它汇总完成项、提示风险、做当日复盘，顺手把改动同步记录。</p>
<blockquote class="scene"><strong>场景：一天怎么用。</strong>早上开电脑说「开工」→ AI 弹窗列出今日任务+优先级；中途做完一件事顺手记一笔；下班说「收工」→ AI 弹窗给复盘（待办悬案 / 风险与精进 / 今日改动 / 明日提醒）。等于多了一个不用发工资的搭档，每天帮你收口。</blockquote>
<blockquote class="tip">这份「开工/收工」技能已写成通用说明文档，团队同事可直接拿来用。在线看 → <a href="kb.html?id=work-rhythm-method" target="_blank" style="color:var(--purple);font-weight:700;">查看方法</a>；下载源文件自己改 → <a href="wecom-kb-export/work-rhythm-method.md" target="_blank" style="color:var(--purple);font-weight:700;">下载 MD</a>。把文档里的路径/称呼换成你自己的即可直接用。</blockquote>
`
  },
  {
    slug: "apply-anywhere",
    no: "07",
    title: "举一反三 · 同一套方法跑通各种场景",
    subtitle: "延展 · AI 适用于各种场景",
    tag: "延展",
    category: "售后AI工作台",
    featured: false,
    summary: "AI 不只属于办公室。喂数据→生成→多版本→定时推送→多通道提醒，这条流水线换个输入就能套到任何重复场景。",
    html: `
<p>前面讲的都在工作里，但 AI 不只属于办公室——它适用于各种场景。</p>
<blockquote class="scene"><strong>生活里的例子：</strong>我给孩子建了一本「错题本/练习本」，把错题信息投喂给 AI，它按固定周期（如每周三）自动生成练习题，分「有答案/无答案」两个版本，推到邮箱 + 个人微信提醒。连生活里这种重复活都能自动化，工作上的重复活更不在话下。</blockquote>
<h2>方法可复制</h2>
<p><strong>喂数据 → AI 生成 → 多版本输出 → 定时推送 → 多通道提醒</strong>。这条流水线，换个「输入」就能用到任何重复场景。</p>
<blockquote class="tip">场景不分工作还是生活——会「喂、生成、推送」这一套，AI 就是你随叫随到的搭档。</blockquote>
`
  },
  {
    slug: "team-results",
    no: "08",
    title: "部门工作成果 · 用 AI 到底省了多少",
    subtitle: "成效 · 提效看得见",
    tag: "成效",
    category: "售后AI工作台",
    featured: true,
    summary: "售后团队的实际成果：节省的工时、提速的交付、减少的重复劳动。财务续费对账 1 个工作日 → 约 40 秒。",
    html: `
<p>公司最终想看到的，是我们到底用 AI 做了多少提效。这一节汇总售后团队的实际成果——节省的工时、提速的交付、减少的重复劳动。（部分数据待周一向同事核实后补齐。）</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
<tr style="border-bottom:2px solid var(--border);"><th style="text-align:left;padding:10px;color:var(--ink-soft);">成果项</th><th style="text-align:left;padding:10px;color:var(--ink-soft);">改进前</th><th style="text-align:left;padding:10px;color:var(--ink-soft);">改进后</th></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:10px;font-weight:700;">财务续费对账</td><td style="padding:10px;">1 个工作日</td><td style="padding:10px;">约 40 秒 ✓</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:10px;font-weight:700;">网点梳理模板</td><td style="padding:10px;" colspan="2">系统导出上千网点常重复/不准，AI 按规则梳理成通用模板（单次节省时间、服务客户数待补）</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:10px;font-weight:700;">开工/收工 + 日报</td><td style="padding:10px;" colspan="2">每日自动列任务、自动复盘，替代手工填报（每人每天节省分钟数、覆盖人数待补）</td></tr>
<tr><td style="padding:10px;font-weight:700;">物联网数据 AI 分析</td><td style="padding:10px;" colspan="2">设备线路流转、休眠设备、资产滞留月报等 AI 辅助分析（报告生成提速、人工核对减少量待补）</td></tr>
</table>
<blockquote class="tip">本页为成果汇总版面，数据位留白。周一向相关同事确认后，把真实数字（节省工时/提速倍数/覆盖人数）填进上表即可。</blockquote>
`
  },
  {
    slug: "prompt-toolbox",
    no: "09",
    title: "附录 · 我的提示词工具箱",
    subtitle: "可直接复制的原句",
    tag: "附录",
    category: "售后AI工作台",
    featured: true,
    summary: "从日常沉淀里挑的 12 条「可直接复制给 AI 的指令」，拿到就能用，不用背。外加一份沟通习惯清单。",
    html: `
<p>下面 12 条是从日常沉淀里挑的最常用的「可直接复制给 AI 的指令」。拿到就能用，不用背。</p>
<div class="prompt-box">① 理乱信息：请你把我凌乱的信息帮我结构化的整理，我在你整理出来的结论上再想一想。<button class="copy">复制</button></div>
<div class="prompt-box">② 补漏维度：你觉得我有什么纬度是我没想到的？<button class="copy">复制</button></div>
<div class="prompt-box">③ 写提示词口诀：给定位、定格式、定目标、设边界、分步走——目标切、输出切，不丢大目标一团乱。<button class="copy">复制</button></div>
<div class="prompt-box">④ 存成文档：帮我把刚这些不错的东西存成一个 markdown 文档，保存在电脑本地，以后我丢给你你能唤起今天回忆。<button class="copy">复制</button></div>
<div class="prompt-box">⑤ 上传模板：这是训练好的东西，以后每次〔汇报/写作〕都按此标准指导我；不符合标准就像老师一样帮我点评。<button class="copy">复制</button></div>
<div class="prompt-box">⑥ 改汇报材料：请以基于知识库里的〔汇报MD〕，能指导我来修改我的这份汇报材料吗？<button class="copy">复制</button></div>
<div class="prompt-box">⑦ 让 AI 出方案：帮我形成方案和对比，我重点看哪些指标才能决策？两个方案从哪几个维度比较？<button class="copy">复制</button></div>
<div class="prompt-box">⑧ 画甘特图：请基于咱们前面讨论过的全部内容和项目计划，来帮我画一个甘特图吧，以 HTML 的格式哦。<button class="copy">复制</button></div>
<div class="prompt-box">⑨ 进度追踪：现在是几月几号，你能不能告诉我，我到今天应该完成什么了，以及有什么风险。<button class="copy">复制</button></div>
<div class="prompt-box">⑩ 时间规划：我给你发了一个时间管理工具，那你来帮我规划一下我的时间。<button class="copy">复制</button></div>
<div class="prompt-box">⑪ 模型选择：专业场景用强模型；国内模型便宜可搭 Agent；不一定用最高级版本，考虑性能和成本。<button class="copy">复制</button></div>
<div class="prompt-box">⑫ 拆步骤：只要拆到一个能计算时间的步骤，它才叫正确的步骤。<button class="copy">复制</button></div>
<h2>附录 · 我的沟通习惯清单</h2>
<ul>
<li><strong>先别动手</strong>：信息没说完前，让 AI 只记录不执行；说完说「我们讨论吧」再给结论。</li>
<li><strong>需求先拆细</strong>：大需求先用免费模型拆成小块，逐块聊清，再交给能出文件的工具。</li>
<li><strong>换工具先交底</strong>：换 AI 时说：先熟悉我的数据和需求，有疑问先沟通再动手。</li>
<li><strong>必须自测</strong>：交付前让它「连成型结果一起检查」，自己再跑一遍。</li>
<li><strong>语音输入法</strong>：长需求按住说话，比手打快；还能逼自己把逻辑说清楚。</li>
<li><strong>持续喂料</strong>：好课程、客户终稿、反复做的事，都丢给 AI 学，再沉淀成模板。</li>
</ul>
<blockquote class="tip">本册方法均来自日常实践沉淀，不含任何外部课程署名；提示词为通用指令，可自由复制使用。</blockquote>
`
  },
  {
    slug: "copy-formulas",
    no: "A1",
    title: "25 个万能文案公式速查表",
    subtitle: "沟通汇报 · 拿来就能套",
    tag: "文案",
    category: "沟通汇报",
    featured: true,
    summary: "25 个经过验证的说服性文案结构（AIDA、PAS、FAB…），配模板和适用场景。写汇报、写推送、写提案，直接抄。",
    html: `
<p>同样的意思，换个结构说出来，说服力天差地别。下面 25 个是从经典文案学里挑的「万能结构」，每个都给了可直接填空的模板。收藏这页，写材料前翻一翻。</p>
<table class="ref-table">
<thead><tr><th>公式</th><th>结构</th><th>适合场景</th><th>模板（把 {} 换成你的内容）</th></tr></thead>
<tbody>
<tr><td><b>AIDA</b></td><td>注意→兴趣→渴望→行动</td><td>引流 CTA、通用说服</td><td>{吸引眼球的钩子} → {有趣细节} → {想要的结果} → {行动}</td></tr>
<tr><td><b>PAS</b></td><td>问题→放大→解决</td><td>销售页、痛点页</td><td>你在为{问题}头疼，它正悄悄消耗{代价}，{方案}能解决。</td></tr>
<tr><td><b>4Ps</b></td><td>承诺→画面→证明→推动</td><td>落地页、获客</td><td>{好处承诺} → {未来画面} → {证据} → {马上行动}</td></tr>
<tr><td><b>Before-After-Bridge</b></td><td>前→后→桥</td><td>蜕变案例</td><td>以前：{旧状态}。以后：{新状态}。桥梁：{怎么做到}</td></tr>
<tr><td><b>QUEST</b></td><td>确认→理解→教育→刺激→过渡</td><td>方案匹配客户</td><td>{确认身份} → {共情} → {讲方案} → {激起欲望} → {导向 CTA}</td></tr>
<tr><td><b>Star-Story-Solution</b></td><td>人物→故事→方案</td><td>人格化品牌</td><td>{主角} → {它的困境} → {它的解法}</td></tr>
<tr><td><b>FAB</b></td><td>特点→优势→利益</td><td>功能介绍</td><td>{功能}：{它做什么} → {为何重要} → {帮你得到什么}</td></tr>
<tr><td><b>What If</b></td><td>如果……</td><td>开场钩子</td><td>如果不用{常见障碍}，你也能{想要的结果}？</td></tr>
<tr><td><b>How To</b></td><td>怎么做</td><td>教程类</td><td>如何在{ timeframe }内{达成结果}</td></tr>
<tr><td><b>Number List</b></td><td>数字清单</td><td>易扫的好处列表</td><td>{N} 个{方法}帮你{结果}</td></tr>
<tr><td><b>Question Hook</b></td><td>反问</td><td>开场互动</td><td>{让人点头的问题}？方法在这里。</td></tr>
<tr><td><b>Proof Stack</b></td><td>数据→来源→意义</td><td>建立可信</td><td>{亮眼数据}（来源：{可信来源}），这意味着{对你的意义}。</td></tr>
<tr><td><b>Future Pacing</b></td><td>想象未来</td><td>愿景类</td><td>想象：{渴望的未来场景}，这正是{方案}给你的。</td></tr>
<tr><td><b>Social Proof</b></td><td>谁+结果+原话</td><td>客户证言</td><td>{客户}把{指标}提升了{幅度}：「{原话}」。</td></tr>
<tr><td><b>Scarcity Urgency</b></td><td>限量+期限</td><td>促成行动</td><td>仅剩{数量}，{日期}截止，{错过的代价}。</td></tr>
<tr><td><b>Cost of Inaction</b></td><td>不做的代价</td><td>推动改变</td><td>每{周期}不解决{问题}，你就亏{量化损失}，一年就是{更大数字}。</td></tr>
<tr><td><b>Simple Benefit</b></td><td>你得到</td><td>价值直给</td><td>{方案}：你得到{具体好处}。</td></tr>
<tr><td><b>Objection Preempt</b></td><td>预判+化解</td><td>答疑/FAQ</td><td>你也许会想{顾虑}，其实{用证据反驳}。</td></tr>
<tr><td><b>Comparison Frame</b></td><td>对手 vs 我们</td><td>竞争定位</td><td>{对手做法}：{局限}。{我们的做法}：{优势}。</td></tr>
<tr><td><b>Pain-Claim-Gain</b></td><td>痛点→断言→收益</td><td>价值主张</td><td>{痛点}？{关于方案的强断言}。结果：{具体收益}。</td></tr>
<tr><td><b>One Thing</b></td><td>唯一关键</td><td>聚焦</td><td>{受众}要{结果}，最该做的一件事是{那一件事}。</td></tr>
<tr><td><b>Riddle Open</b></td><td>谜题→揭晓</td><td>开场悬念</td><td>{谜题/悖论}，答案是{揭晓}，对你意味着{意义}。</td></tr>
<tr><td><b>Hero Journey</b></td><td>平凡→挑战→蜕变</td><td>叙事结构</td><td>{平凡主角} → {遇见挑战} → {靠方案克服} → {完成蜕变}</td></tr>
<tr><td><b>Value Stack</b></td><td>分项+总价</td><td>价格/投入</td><td>{项1}(值\${X})+{项2}(值\${Y})…=总价值\${Z}，你的投入仅\${实价}。</td></tr>
<tr><td><b>Power Statement</b></td><td>断言+证据</td><td>权威感</td><td>{有力断言}。{支撑事实}。</td></tr>
</tbody></table>
<blockquote class="tip">用法：先想清楚这页要读者「做什么」(CTA) 和「什么情绪」(好奇/信任/紧迫)，再挑一个最贴的结构套模板。别硬凑，结构是为说服力服务的。</blockquote>
`
  },
  {
    slug: "speech-structures",
    no: "A2",
    title: "15 种汇报 / 演讲结构怎么选",
    subtitle: "沟通汇报 · 对的上场景",
    tag: "结构",
    category: "沟通汇报",
    featured: false,
    summary: "述职、销售 pitch、培训 workshop、案例分享……15 种成熟 deck 结构对照，告诉你每种用什么骨架、适合什么受众。",
    html: `
<p>做汇报/分享最怕「想到哪讲到哪」。下面 15 种是圈内验证过的结构，先选对场景，再照骨架填，逻辑自然就顺了。</p>
<table class="ref-table">
<thead><tr><th>结构</th><th>页数</th><th>骨架（章节顺序）</th><th>最适合</th></tr></thead>
<tbody>
<tr><td><b>YC Seed Deck</b></td><td>10-12</td><td>标题→问题→方案→进展→市场→产品→模式→团队→财务→诉求</td><td>融资路演</td></tr>
<tr><td><b>Guy Kawasaki 10/20/30</b></td><td>10</td><td>标题→问题/机会→价值→核心魔法→模式→打法→竞争→团队→预测→状态</td><td>投资人快速 pitch</td></tr>
<tr><td><b>Series A Deck</b></td><td>12-15</td><td>使命→问题→方案→数据→产品→市场→模式→竞争→团队→打法→财务→用途→诉求</td><td>成长期融资</td></tr>
<tr><td><b>Product Demo</b></td><td>5-8</td><td>钩子/问题→方案概览→现场演示→核心功能→收益→价格→CTA</td><td>产品演示</td></tr>
<tr><td><b>Sales Pitch</b></td><td>7-10</td><td>个性化钩子→对方问题→不做的代价→你的方案→证据→差异→报价→答疑→CTA</td><td>成单</td></tr>
<tr><td><b>Nancy Duarte Sparkline</b></td><td>灵活</td><td>「现状」↔「理想」反复对照，最后落到「新平衡」</td><td>转变观念</td></tr>
<tr><td><b>Problem-Solution-Benefit</b></td><td>3-5</td><td>问题→方案→关键收益→证据→CTA</td><td>快速说服</td></tr>
<tr><td><b>QBR 季度复盘</b></td><td>10-15</td><td>摘要→目标vs结果→指标→亮点→挑战→复盘→客户洞察→竞争→下季目标→资源</td><td>对内向上汇报</td></tr>
<tr><td><b>Team All-Hands</b></td><td>8-12</td><td>开场→公司战果→指标看板→团队闪光→产品→客户故事→挑战→路线图→Q&A</td><td>全员大会</td></tr>
<tr><td><b>Conference Talk</b></td><td>15-25</td><td>钩子/故事→可信度→大观点→论点+证据×3→综合→CTA</td><td>行业演讲</td></tr>
<tr><td><b>Workshop 培训</b></td><td>20-40</td><td>欢迎/目标→议程→概念+练习×3→综合→资料→Q&A</td><td>培训带练</td></tr>
<tr><td><b>Case Study 案例</b></td><td>8-12</td><td>客户→挑战→为何选我们→实施→方案细节→结果→原话→教训→可复制性→CTA</td><td>案例分享</td></tr>
<tr><td><b>Competitive Analysis</b></td><td>6-10</td><td>格局→对手概览→功能矩阵→价格对比→优劣→差异定位→建议</td><td>战略决策</td></tr>
<tr><td><b>Board Meeting</b></td><td>15-20</td><td>议程→摘要→财务→指标→产品→产销→运营→团队→风险→举措→里程碑→诉求</td><td>董事会</td></tr>
<tr><td><b>Webinar</b></td><td>20-30</td><td>欢迎→讲师→议程→钩子→教学内容→案例→产品→演示→优惠→Q&A→资料</td><td>线上获客</td></tr>
</tbody></table>
<blockquote class="tip">售后实战派最常用的三种：<b>QBR</b>（向上汇报进度）、<b>Case Study</b>（给客户讲成功）、<b>Problem-Solution-Benefit</b>（快速说服）。先把这三练熟。</blockquote>
`
  },
  {
    slug: "ppt-7-questions",
    no: "A3",
    title: "做 PPT 前先问自己 7 个问题",
    subtitle: "沟通汇报 · 动手前必做",
    tag: "PPT",
    category: "沟通汇报",
    featured: false,
    summary: "风格选错、受众没定，后期翻修代价极高。照这 7 问清单逐项对齐，再动手做 PPT / 分享，一次做对。",
    html: `
<p>做 PPT / 网页版分享，最贵的不是「做」，是「做完发现方向错了再返工」。动手前先拿这 7 问跟自己（或需求方）对齐，结构定对，后面就顺。</p>
<h2>动手前 7 问清单</h2>
<table class="ref-table">
<thead><tr><th>#</th><th>问题</th><th>为什么必须问</th></tr></thead>
<tbody>
<tr><td>1</td><td><b>哪种风格？</b>（杂志感 / 瑞士极简 / 数据驱动）</td><td>决定整套模板、配色、字体，最先定</td></tr>
<tr><td>2</td><td><b>受众是谁？什么场景？</b>（内部/发布/路演/私享）</td><td>决定语言深度与口吻</td></tr>
<tr><td>3</td><td><b>分享多久？</b></td><td>15 分≈10 页，30 分≈20 页，45 分≈25-30 页</td></tr>
<tr><td>4</td><td><b>有原始素材吗？</b>（文档/数据/旧PPT/链接）</td><td>有就基于素材搭，没有就帮你从零搭</td></tr>
<tr><td>5</td><td><b>有图片/截图吗？怎么处理？</b></td><td>决定图文版式、图片槽位、截图美化方式</td></tr>
<tr><td>6</td><td><b>想要哪套主题色？</b></td><td>风格定了再选色，避免返工</td></tr>
<tr><td>7</td><td><b>有没有硬约束？</b>（必须含 XX / 不能出现 YY）</td><td>提前说清，避免白做</td></tr>
</tbody></table>
<h2>没大纲？用「叙事弧」搭骨架</h2>
<p>钩子(1页) → 定调(1-2页) → 主体(3-5页) → 转折(1页) → 收束(1-2页)。三张表对齐再动手：① 叙事弧 ② 页数规划 ③ 主题节奏（hero 页与非 hero 页交替，别连续 3 页同色）。</p>
<h2>交付前自检（踩坑清单）</h2>
<ul>
<li><strong>不用 emoji 当图标</strong>：用 Lucide 线性图标，更专业。</li>
<li><strong>图片只裁底部</strong>：左右和顶部绝对不能切，否则关键信息（如截图标题栏）被吃掉。</li>
<li><strong>大标题别超屏宽</strong>：中文大标题 ≤ 5 字，长标题手动 <code>&lt;br&gt;</code> 断行，别让 1 字占 1 行。</li>
<li><strong>字体分工</strong>：标题衬线、正文非衬线、元数据等宽，层级靠字号+字体共同定义。</li>
<li><strong>别加厚阴影/黑框</strong>：最多 1-4px 微圆角 + 极淡底噪，加阴影瞬间变「商务 PPT」。</li>
</ul>
<blockquote class="tip">一句话心法：<strong>结构优于装饰</strong>。先把叙事弧和页数定对，视觉是其次——方向错了，再好看也白做。</blockquote>
`
  },
  {
    slug: "brand-messaging",
    no: "B1",
    title: "一套能抄的品牌信息架构模板",
    subtitle: "品牌定位 · 使命到电梯演讲",
    tag: "品牌",
    category: "品牌定位",
    featured: false,
    summary: "使命→愿景→价值主张→定位→关键信息→证明点，6 层漏斗 + 全套填空模板。帮你把「我是谁」一句话讲清。",
    html: `
<p>不管是个人 IP 还是团队，别人问「你是干嘛的」，支支吾吾就亏了。下面这套 6 层信息架构，从「为什么存在」一路收到「一句话电梯演讲」，每层都给了填空模板。</p>
<h2>信息架构 6 层漏斗</h2>
<table class="ref-table">
<thead><tr><th>层</th><th>回答的问题</th><th>填空模板</th></tr></thead>
<tbody>
<tr><td>使命 Mission</td><td>为什么存在</td><td>我们为{受众}，通过{方法}，让他们能{结果}。</td></tr>
<tr><td>愿景 Vision</td><td>要去哪</td><td>一个{渴望的改变}成为世界。</td></tr>
<tr><td>价值主张 Value</td><td>提供什么</td><td>对{目标客户}（他们有{需求}），{品牌}是{品类}，能{核心好处}。不同于{对手}，我们{差异点}。</td></tr>
<tr><td>定位 Positioning</td><td>和别人哪不同</td><td>{品牌}是面向{受众}的{品类}，他们想要{结果}，因为{可信理由}。</td></tr>
<tr><td>关键信息 Key Msg</td><td>常说哪几句</td><td>一句核心 + 3-5 句支撑（每句对应一个受众痛点+证明点）</td></tr>
<tr><td>证明点 Proof</td><td>凭什么信你</td><td>数据 / 客户原话 / 案例 / 资质</td></tr>
</tbody></table>
<h2>电梯演讲（三档）</h2>
<ul>
<li><strong>10 秒</strong>：一句话勾起兴趣。</li>
<li><strong>30 秒</strong>：问题 + 方案 + 差异。</li>
<li><strong>60 秒</strong>：完整版 + 证明点。</li>
</ul>
<h2>用我自己的情况填空试试</h2>
<blockquote class="scene"><strong>玲姐版（示例）：</strong>使命——「帮售后同事把 AI 用顺，让重复活自动跑」；价值主张——「对售后团队（每天被突发工单切碎），玲姐的 AI 工作台是{方法论+工具库}，能把续费对账从 1 天压到 40 秒」；定位——「面向制造业 IoT 售后的实操派，要的是{马上能抄的模板}，不是概念」。</blockquote>
<blockquote class="tip">信息测试 5 问：① 清楚吗（无黑话）② 差异化吗（对手说不出）③ 可信吗（证得出）④ 打动人吗（受众在乎）⑤ 一致吗（符合品牌）。五关过了才算定稿。</blockquote>
`
  },
  {
    slug: "brand-voice",
    no: "B2",
    title: "怎么定义你的「说话腔调」",
    subtitle: "品牌定位 · 语调框架",
    tag: "品牌",
    category: "品牌定位",
    featured: false,
    summary: "声音（稳定）和语调（随场景变）不是一回事。4 个光谱维度 + 场景适配表，让你的表达始终像「你」。",
    html: `
<p>「品牌声音」不是一句 slogan，是你每篇内容、每条回复的「说话方式」。关键区分：<strong>Voice（声音）是稳定的个性，Tone（语调）是随场景变的语气</strong>。比如一个亲切的品牌，庆功时雀跃、客服时共情——声音没变，语调变了。</p>
<h2>4 个光谱维度</h2>
<table class="ref-table">
<thead><tr><th>维度</th><th>一端</th><th>另一端</th></tr></thead>
<tbody>
<tr><td>正式度</td><td>正式（合同/公告）</td><td>随意（朋友圈）</td></tr>
<tr><td>语言复杂度</td><td>简单（消费者）</td><td>复杂（技术 B2B）</td></tr>
<tr><td>性格</td><td>严肃（金融）</td><td>俏皮（文娱）</td></tr>
<tr><td>情绪</td><td>克制（企业）</td><td>外放（生活方式）</td></tr>
</tbody></table>
<h2>3-5 个个性词 + 对照表</h2>
<p>先选 3-5 个形容自己的词，比如：自信不傲慢、友好不敷衍、专业不居高、创新不花哨、真实不随意。每个词配「该做 / 不该做」。</p>
<h2>场景适配</h2>
<table class="ref-table">
<thead><tr><th>场景</th><th>语调偏移</th><th>例子</th></tr></thead>
<tbody>
<tr><td>社交媒体</td><td>更随意</td><td>「嗨，今天聊个狠的」</td></tr>
<tr><td>客服/支持</td><td>更共情</td><td>「我们懂你的着急……」</td></tr>
<tr><td>正式文书</td><td>更正式</td><td>「根据……规定」</td></tr>
<tr><td>销售/提案</td><td>更自信</td><td>「你会看到结果」</td></tr>
</tbody></table>
<blockquote class="tip">给自己的声音写一页 Guide：<b>我们是</b>（3 个性词）→ <b>我们听起来像</b>（例句）→ <b>我们不像</b>（反例）→ <b>改写示例</b>（Before/After）。这页就是内容审校的尺子。</blockquote>
`
  },
  {
    slug: "time-system",
    no: "C1",
    title: "愿景→甘特图→每日代办→日报：四步时间管理系统",
    subtitle: "效率体系 · 全链路",
    tag: "时间管理",
    category: "效率体系",
    featured: true,
    summary: "一个售后实战派用 AI 搭的时间管理系统：从 5 年愿景看板，到每日飞书日报，四步全链路可复制。",
    html: `
<p>我最大的痛点是：白天售后突发把深度工作切碎，「重要不紧急」总让位于救火。用 AI 搭了套系统，把「别漏别忘」变成「自动收口」。</p>
<h2>四步链路</h2>
<ol>
<li><strong>愿景看板</strong>：用 AI 把「人生愿景」生成 5 年看板（28 问 / 6 维度），只建 5 个字段存飞书。</li>
<li><strong>5 年甘特图</strong>：把愿景拆成 5 主维度 14 子维度，AI 生成两级甘特图。</li>
<li><strong>本月任务总览 → 每日时间表</strong>：AI 把本月目标拆成每日时间表，先过「负荷检查」。</li>
<li><strong>飞书日报回写</strong>：每天收工，AI 把完成项回写飞书日报表。</li>
</ol>
<h2>负荷检查公式（必过）</h2>
<div class="prompt-box">任务总时长 &lt; 可用时间 × 85% 才"可行"；否则：A 延后 / B 简化 / C 挤时间。<button class="copy">复制</button></div>
<h2>分配三原则</h2>
<ul>
<li>按任务类型匹配时段：学习→上午，写作→晚上精力高峰。</li>
<li>每天不超载：工作日 = 主业 + 1~2 件要事。</li>
<li>关键里程碑优先，留 1~2 天缓冲。</li>
</ul>
<h2>飞书 4 张表（收口）</h2>
<table class="ref-table">
<thead><tr><th>表</th><th>作用</th></tr></thead>
<tbody>
<tr><td>愿景看板</td><td>5 年方向，不常改</td></tr>
<tr><td>每日待办</td><td>晨间 AI 写入今日重点</td></tr>
<tr><td>每日日报</td><td>收工 AI 回写完成项</td></tr>
<tr><td>工作项目</td><td>中长期项目进度</td></tr>
</tbody></table>
<p>三通道提醒兜底：macOS 弹窗 + 邮件 + 飞书群「玲姐时间管理」，到点就提醒，不靠记性。</p>
<blockquote class="tip">认知转变：<strong>时间管理不是挤时间，是给重要不紧急的事钉死固定锚点</strong>。系统只解决「别漏别忘有记录」，真正关键是锚点。</blockquote>
`
  },
  {
    slug: "daily-schedule",
    no: "C2",
    title: "给「重要不紧急」钉死固定锚点：每日时间表模板",
    subtitle: "效率体系 · 模板",
    tag: "时间管理",
    category: "效率体系",
    featured: false,
    summary: "我的真实作息基线 + 工作日/周末模板 + 兜底策略 + 周复盘 4 问。重要的事不是挤时间，是钉死锚点。",
    html: `
<p>这套时间表是我自己跑通的。核心是：每天只锁 3 件要事 + 几个固定锚点，计划崩了也不至于全崩。</p>
<h2>我的真实作息基线</h2>
<ul>
<li>07:00 起，23:00 前睡；精力高峰在<strong>晚上</strong>，白天售后突发不可控。</li>
<li>周二 / 周四 18:00-20:00 留公司「学习夜」。</li>
</ul>
<h2>工作日模板</h2>
<table class="ref-table">
<thead><tr><th>时段</th><th>安排</th></tr></thead>
<tbody>
<tr><td>07:00-07:10</td><td>晨间规划，列 3 件要事</td></tr>
<tr><td>09:00-18:00</td><td>工作（碎片时间清小任务）</td></tr>
<tr><td>18:00-20:00</td><td>周二/四：公司学习夜</td></tr>
<tr><td>20:00-22:30</td><td>晚间专注（写作/深度活）</td></tr>
<tr><td>22:30-23:00</td><td>复盘 + 明日规划</td></tr>
</tbody></table>
<h2>周末模板</h2>
<p>可支配约 4h/天：周复盘 + 大块任务 + 陪伴 + 运动；父母联络、周复盘固定<strong>周日晚上</strong>。</p>
<h2>兜底策略</h2>
<ul>
<li>昼间突发 → 学习/生活块顺延到晚间，不硬挤。</li>
<li>每日只锁 3 件要事 + 固定锚点，避免「计划一崩就放弃」。</li>
</ul>
<h2>周复盘 4 问</h2>
<div class="prompt-box">① 目标达成率多少？② 哪些好 / 哪些不好？③ 根本原因是什么？④ 下周怎么调？<button class="copy">复制</button></div>
<blockquote class="tip">锚点思维：固定动作（晨规划、学习夜、复盘）像钉子，钉在每天；浮动任务往里填。钉子在，一天就不会散。</blockquote>
`
  },
  {
    slug: "work-rhythm-method",
    no: "C3",
    title: "开工收工双轨：让 AI 记住你做到哪",
    subtitle: "效率体系 · 习惯",
    tag: "习惯",
    category: "效率体系",
    featured: false,
    summary: "开工卡四段式 + 收工七步法 + 飞书双轨一致。每天自动列任务、自动复盘，等于多一个不发工资的搭档。",
    html: `
<p>这套「开工/收工」习惯，本质是把 AI 变成你的每日搭档：早上帮你理清今天，晚上帮你收口昨天。</p>
<h2>开工卡（5 步，≤20 行）</h2>
<ol>
<li>读最近一日日志</li>
<li>读待办清单，报今日/本周/本月固定任务</li>
<li>读项目记忆，补进行中项目</li>
<li>生成「今日开工卡」（四段式）</li>
<li>渲染提醒看板（今日/本周/本月/每年分组）</li>
</ol>
<p><strong>开工卡四段式：</strong>📌 上次做了什么 / ⚡ 今天接着干（3-5 条「动词+对象」）/ ⚠️ 需决策确认 / 📋 待办（来自清单）。</p>
<h2>收工存档（7 步）</h2>
<ol>
<li>分类：🟢 有进展 / 🟡 零星 / ⚪ 闲聊</li>
<li>盘点成表，追加当日日志（必须含「风险/精进」段）</li>
<li>更新项目记忆（超 150 行必清理）</li>
<li>更新项目进度文件</li>
<li>飞书日报回写（每天建 YYYY-MM-DD·日报）</li>
<li>主动问 ≤2 题（要记住的？做成技能？）</li>
<li>一句话收尾</li>
</ol>
<p><strong>红线：</strong>严禁只做「一句话收尾」，必须走完第 5、6 步。看板状态：完成改绿、稍后改琥珀。</p>
<h2>飞书双轨一致</h2>
<p>开工卡和飞书待办<strong>同源</strong>——都来自同一份待办清单。新增/修改循环任务只改一处，两边自动同步，不会出现「开工有、飞书没有」的偏差。</p>
<blockquote class="tip">体验类比：开工卡是「今天该干什么」，飞书待办是「可筛选/标记/复盘的表」，源只有一个。</blockquote>
`
  },
  {
    slug: "claude-feishu",
    no: "D1",
    title: "手把手：用 lark-cli 把 AI 连上飞书",
    subtitle: "技术实操 · 从安装到发消息",
    tag: "飞书",
    category: "技术实操",
    featured: false,
    summary: "3 条命令装好 lark-cli，登录授权，第一次从命令行给飞书发消息。私人助手直达 IM，不用开网页。",
    html: `
<p>把 AI 助手连到飞书，等于它能在你常用的 IM 里直接回你。下面是 lark-cli 的最简路径。</p>
<h2>1. 安装（3 条命令）</h2>
<div class="prompt-box">npm install -g @larksuite/cli<br>npx skills add larksuite/cli -y -g<button class="copy">复制</button></div>
<h2>2. 配置凭证</h2>
<div class="prompt-box">lark-cli config init --new<button class="copy">复制</button></div>
<p>会在后台跑出授权链接，复制到浏览器完成登录。</p>
<h2>3. 登录并验证</h2>
<div class="prompt-box">lark-cli auth login --recommend<br>lark-cli auth status<button class="copy">复制</button></div>
<h2>4. 三层调用方式</h2>
<ul>
<li><strong>快捷命令</strong>：<code>lark-cli calendar +agenda</code>（直接看日程）</li>
<li><strong>API 命令</strong>：结构化读写多维表格/文档</li>
<li><strong>通用调用</strong>：<code>lark-cli api GET /open-apis/...</code></li>
</ul>
<h2>安全提醒</h2>
<ul>
<li>勿放开默认安全配置；机器人作私人助手，<strong>别随便拉群</strong>。</li>
<li>App Secret 是敏感信息，只存本地文件，不进聊天/仓库。</li>
</ul>
<blockquote class="scene"><strong>真实用处：</strong>每天晨间用脚本读待办清单写飞书日报、发群提醒；AI 标记完成即改飞书状态——详见下一篇《飞书多维表格当时间管理中枢》。</blockquote>
`
  },
  {
    slug: "feishu-automation",
    no: "D2",
    title: "飞书多维表格当时间管理中枢：4 表 + 6 脚本",
    subtitle: "技术实操 · 自动化套件",
    tag: "飞书",
    category: "技术实操",
    featured: false,
    summary: "4 张多维表格 + 6 个 Python 脚本，把愿景/待办/日报/项目全收口到飞书，AI 标记完成即改状态。",
    html: `
<p>光连上飞书不够，要让它真正「接管」你的时间管理。我用 4 张多维表格 + 6 个 Python 脚本搭了套自动化套件。</p>
<h2>4 张表（base）</h2>
<table class="ref-table">
<thead><tr><th>表</th><th>作用</th></tr></thead>
<tbody>
<tr><td>愿景看板</td><td>5 年方向</td></tr>
<tr><td>每日待办</td><td>晨间 AI 写入今日重点</td></tr>
<tr><td>每日日报</td><td>收工 AI 回写完成项</td></tr>
<tr><td>工作项目</td><td>中长期项目进度</td></tr>
</tbody></table>
<h2>6 个脚本职责</h2>
<table class="ref-table">
<thead><tr><th>脚本</th><th>做什么</th></tr></thead>
<tbody>
<tr><td>feishu_build_system</td><td>建 4 表并灌种子数据</td></tr>
<tr><td>feishu_todo</td><td>晨间写今日重点</td></tr>
<tr><td>feishu_daily</td><td>晚间回写日报</td></tr>
<tr><td>feishu_mark_done</td><td>标完成（改状态为绿）</td></tr>
<tr><td>feishu_gantt</td><td>生成甘特图</td></tr>
<tr><td>feishu_test_send</td><td>发群消息测试</td></tr>
</tbody></table>
<h2>统一运行命令</h2>
<div class="prompt-box">cd '&lt;项目文件夹&gt;' &amp;&amp; /Users/liling/.workbuddy/binaries/python/versions/3.13.12/bin/python3 &lt;脚本&gt; [参数]<button class="copy">复制</button></div>
<h2>双轨一致</h2>
<p>待办清单是唯一源：AI 标记完成 → 改飞书状态，开工卡和飞书待办永不打架。</p>
<blockquote class="tip">进阶：把脚本迁到团队版（复制 base + 设字段权限），就能从「个人别漏别忘」升级成「团队管理工具」。</blockquote>
`
  },
  {
    slug: "ai-data-analysis",
    no: "D3",
    title: "从「拉数据」到「解决问题」：数据分析四场景心法",
    subtitle: "技术实操 · 方法论 + 案例",
    tag: "数据分析",
    category: "技术实操",
    featured: true,
    summary: "售后实战派也能用的数据分析心法：四场景、假设驱动、Issue Tree，附深圳发卡盈利分析真实复盘。",
    html: `
<p>很多人做数据分析是从「我有什么数据」出发，结果拉一堆表交差。正确的顺序是反的：<strong>先问解决什么经营问题</strong>。</p>
<h2>四场景心法</h2>
<table class="ref-table">
<thead><tr><th>场景</th><th>怎么用</th></tr></thead>
<tbody>
<tr><td>事前定目标</td><td>目标是算出来的：方向→因素→指标→参考数据→假设→验证，必做乐观/基准/悲观极值测算</td></tr>
<tr><td>事中找根因</td><td>假设驱动，效率是无假设 5 倍+；2-3 轮锁定真因</td></tr>
<tr><td>数据支撑决策</td><td>成本量化 + 收益量化 + 风险评估 + 回收周期</td></tr>
<tr><td>长期沉淀</td><td>把分析套路固化成模板/知识库</td></tr>
</tbody>
</table>
<h2>假设驱动四步</h2>
<ol>
<li>提 3 个最可能假设</li>
<li>设计最快验证方法</li>
<li>用真实数据验证</li>
<li>出结论 + 下一轮假设</li>
</ol>
<h2>真实复盘：深圳发卡盈利分析</h2>
<blockquote class="scene"><strong>背景：</strong>模组占销售额 91% 但毛利仅 4.6%，发卡占 9% 但毛利约 35%。用 Issue Tree 拆四分支（业务结构 / 业务员效率 / 客户产品组合 / 政策杠杆），Claude Code + Python 读 1091 行发卡 + 759 行模组，自动搭树→提假设→验证→出 5 图 + Excel + 报告。
<ul>
<li><b>H1</b>：模拟「销售额提成 1%」vs「毛利额提成 10%」——方某多拿 8292 元、陈某多拿 3749 元，暴露激励导向错位。</li>
<li><b>H2</b>：同型号毛利率差最高 22 个百分点，同运营商移动卡差 53.4 个百分点，存在可复制的优秀销售模式。</li>
<li><b>H3</b>：4 个模组型号毛利率&lt;3%；发卡 TOP15 客户占 66.4% 销售额，4 个大客户低毛利。</li>
</ul>
<strong>三句话结论：</strong>根因是激励按销售额而非毛利额 → 建议「按毛利额提成 + 产品结构考核」→ 预期整体毛利率 8-13% 升至 11-13%（年化多 15-25 万）。</blockquote>
<h2>汇报让领导 10 秒看懂</h2>
<ul>
<li><strong>三句话汇报</strong>：① 结论（建议 XX 因为 XX）② 关键数据支撑 ③ 要领导批什么。</li>
<li><strong>老板一页纸</strong>：结论区 + 关键数据 + 短期/中期/长期行动 + 预期三情景 + 需批准。</li>
<li><strong>图表标题写结论</strong>：写「Q2 分销连降 3 月是最大拖累」，别写「Q2 销售额趋势图」。</li>
</ul>
<blockquote class="tip">异常值判断：均值±1σ 正常、±1~2σ 关注、&gt;±2σ 必须排查。AI 的角色是定目标/确认假设/判业务合理性，不是替你做业务判断。</blockquote>
`
  },
  {
    slug: "sc-upward-report",
    no: "21",
    title: "场景卡 · 向上汇报被质疑",
    subtitle: "沟通汇报 · 被老板打断质疑时怎么谈",
    tag: "向上管理",
    category: "沟通汇报",
    featured: false,
    summary: "汇报售后/SLA 被老板一句「太固化了」打断，别急着争对错——用合作思维把质疑变成共识。",
    html: `
<blockquote class="scene">对应框架卡：第17课-向上管理-回避模式 ＋ 第18课-向上管理-辩论模式<br>
适用：汇报售后/SLA 被老板打断质疑、被贴"固化思维"；老板临时塞活与本职冲突；绩效被模糊评定。</blockquote>
<h2>一、场景画像</h2>
<p>你汇报本月工单闭环率，老板一句"你们这套流程是不是太固化了"，你心里立刻判定"他不懂售后"——要么当场解释到脸红，要么闭嘴回去照做，回工位继续内耗。资源和绩效的事，你从来没主动提过，觉得"我把事做好他自然看见"。</p>
<h2>二、用哪张卡</h2>
<ul>
<li><strong>第18课 辩论模式</strong>：当你心里已经判"领导错我对"。核心是——<strong>向上管理的目标是合作，不是说服或改变领导</strong>。你和领导辩论，赢了输了都没好结果（赢了他也不愿再和你沟通）。放下对错看需求，就有第三种解法。</li>
<li><strong>第17课 回避模式</strong>：当你只谈事、不谈人/不谈自己的利益。核心是——只做业绩不汇报、觉得公司会自行褒奖、自认没谈判资本 → 空有业绩、沦为老黄牛。解法是<strong>合作思维＋五大共识</strong>。</li>
<li>别纠结自己属于哪一类，两条路都通向同一个动作：<strong>发起一次合作沟通</strong>。</li>
<li>五大共识：① 工作要求 ② 期待成果 ③ 工作支持 ④ 绩效评定标准 ⑤ 发展预期。（可分批谈，但<strong>必须带时间点</strong>。）</li>
</ul>
<h2>三、操作步骤</h2>
<ol>
<li><strong>先自查两个问题</strong>：这件分歧我<strong>正面沟通过吗</strong>？如果沟通过，是<strong>探需求</strong>还是在<strong>争对错</strong>？（多数情况是：从没正面说过，或只说过一次就停了。）</li>
<li><strong>放下对错，先确认需求</strong>。他质疑流程，不一定是否定你，可能是他有个没说出口的目标（成本？曝光？客户口碑？）。先问出来，别先辩护。</li>
<li><strong>不辩论，给替代方案</strong>。承接他的思路，再提一个"也能达到他要的结果"的做法——保住你的执行空间，比证明他错更值钱。</li>
<li><strong>把"事"顺带升级成"共识"</strong>。汇报完顺势谈支持与标准：维持这个 SLA 我需要什么、做到什么算 100 分。</li>
<li><strong>约时间点，到点必跟进</strong>。承诺没有时间点等于没有；到点不追等于自动作废。</li>
</ol>
<h2>四、可直接套的话术</h2>
<p><strong>① 被质疑时的第一句（放下对错看需求）· 当面说</strong></p>
<div class="script-box">"领导，我先确认一下——这件事您最希望达成的结果是【降成本 / 减投诉 / 提曝光】吗？我按您要的结果来想办法。"<button class="copy">复制</button></div>
<p><strong>② 化解"固化思维"的质疑 · 当面说</strong></p>
<div class="script-box">"我不是反对改，是想和您一起找<strong>最快达成【填空：闭环率/投诉率】的路</strong>。我会参考您的思路；同时我想到一个也能达到这个要求的方法——【填空：先在退款环节试点两周】，您听听可行不？"<button class="copy">复制</button></div>
<p><strong>③ 老板塞活与本职冲突（如两天一条抖音）· 当面说</strong></p>
<div class="script-box">"这个我接。想先跟您确认，做抖音您主要是要【曝光 / 引流 / 客户信任】对吗？如果是【曝光】，我用【填空：把真实售后案例剪成客户问答】也能达到，而且不占客服接单时间。您看走哪条？"<button class="copy">复制</button></div>
<p><strong>④ 让老板看见业绩（从责任角度，不是表功）· 微信或汇报开头</strong></p>
<div class="script-box">"领导，关于【填空：本月工单闭环】我有必要同步一下全貌——【填空：闭环率 92%，其中仓库超时占 6 单】，这块直接影响【填空：客户续约】，方便您判断。"<button class="copy">复制</button></div>
<p><strong>⑤ 顺带争资源（挂在汇报后面）· 当面说</strong></p>
<div class="script-box">"还有一件想同步：维持当前 SLA 我需要【填空：1 名卡务 / X 预算】。如果补不上，【填空：超时单量会从 6 单涨到 15 单以上】——我先把风险说在前面，您定。"<button class="copy">复制</button></div>
<p><strong>⑥ 问清绩效标准（被模糊评定时，不自我攻击）· 当面说</strong></p>
<div class="script-box">"我想确认，在【填空：工单闭环/投诉处理】上您的核心要求是【填空】？做到什么算 100 分、什么算 80 分？我干活想有个准绳。"<button class="copy">复制</button></div>
<p><strong>⑦ 跟进承诺（到时间点必发）· 微信可发</strong></p>
<div class="script-box">"领导，上次您说【填空：加编制/加薪】在【填空：Q3 末】落地，现在到时间了，我跟进一下进展。"<button class="copy">复制</button></div>
<h2>五、复盘自问</h2>
<ol>
<li>这次我是在<strong>争对错</strong>，还是在<strong>问需求、谈合作</strong>？我有没有先确认他要的结果？</li>
<li>我认定"领导错"的那个判断，<strong>验证过吗</strong>？还是只是我的猜想？</li>
<li>这次谈话里，我谈的是"事"还是也谈了"人/我的支持与利益"？五大共识我碰到了哪几条？</li>
<li>有没有留下<strong>时间点</strong>？下一次跟进是哪天？（写进日历，否则等于没谈。）</li>
</ol>
`
  },
  {
    slug: "sc-self-manage",
    no: "22",
    title: "场景卡 · 自我管理与拖延",
    subtitle: "效率体系 · 话术库一直拖怎么办",
    tag: "自我管理",
    category: "效率体系",
    featured: false,
    summary: "想了两个月的话术库还是空的？归类「不行动」的四类，挖恐惧、切最小行动，授权也一并破。",
    html: `
<blockquote class="scene">对应框架卡：第21课-自我管理（配合 第22课-提问技术 的自问句式）<br>
适用：话术库/流程优化/团队培养一直拖；完美主义不敢授权；被客户骂后反复回想内耗。</blockquote>
<h2>一、场景画像</h2>
<p>客服话术库你已经想了两个月，文件夹里还是空的——每天被紧急投诉牵着跑，一到晚上就"明天开始写"。授权也不敢：想着"给他做还不如我做"，结果所有活压在自己身上，还怪自己效率低。</p>
<h2>二、用哪张卡</h2>
<ul>
<li><strong>第21课 自我管理</strong>。核心一句：<strong>你始终能行动，问题只是"不行动"</strong>；不行动的背后是<strong>优势带来的恐惧</strong>，这才是内耗根源。</li>
<li><strong>不行动的四类</strong>（先给自己归类）：</li>
</ul>
<p>  1. <strong>知道不做</strong> → 直接做，没别的。</p>
<p>  2. <strong>假的"不知道"</strong> → 其实知道，只是潜意识把恐惧的事藏起来了 → 挖恐惧。</p>
<p>  3. <strong>真的"不知道"</strong> → 用行动让自己知道（求助 / 学 / 问一个人）。</p>
<p>  4. <strong>真无解</strong> → 离开。</p>
<ul>
<li><strong>破法</strong>：觉察恐惧 → <strong>最小行动</strong> → 做"提醒装置"每日复盘。</li>
<li><strong>先判定别翻错卡</strong>：这件事只跟自己有关、且卡在"动不了"（不是不会做、不是团队问题、不是老板问题）→ 才是 21 课。</li>
</ul>
<h2>三、操作步骤</h2>
<ol>
<li><strong>归类</strong>。把这周最拖的那一件写下来，对照上面四类打勾。你的多半是第 2 类（假的不知道）。</li>
<li><strong>挖恐惧，别急着上方法</strong>。问自己："我怕行动了会发生什么不好的事？具体是什么？它真会发生吗？"——只给方法不挖恐惧，过几天照样卡。</li>
<li><strong>先自我接纳，再动</strong>。承认"现在卡住是正常的"。越逼越内耗，接纳不是放弃。</li>
<li><strong>切最小行动</strong>。不是"建话术库"，是"今天写一条退款场景的话术"。定一周内的具体动作，颗粒度小到不需要意志力。</li>
<li><strong>装提醒装置</strong>。挑 1-2 个自问，每天晚上花 2 分钟复盘"我今天卡在哪"。（配合速查表 §E 的每周自检。）</li>
<li><strong>授权的破法</strong>：把<strong>一件非关键活</strong>交出去（不是最重要那件），当作实验；观察一周，做周复盘。这一条同时解掉"团队能力上不来"。</li>
</ol>
<h2>四、可直接套的话术（对自己说 / 写在手机备忘录）</h2>
<p><strong>① 拆"假的不知道"· 每天晚上问自己</strong></p>
<div class="script-box">"我想改善【填空：客服话术库缺失】，会采取什么办法？为什么是这个办法？<br>
我是真不知道怎么做，还是【填空：其实知道，只是不想做就自动忽略了】？"<button class="copy">复制</button></div>
<p><strong>② 挖恐惧＋逼出最小行动 · 卡住当天问自己</strong></p>
<div class="script-box">"我怕开始做这件事会发生什么不好的事？具体是什么？——【填空：怕写出来没人用/怕做一半被投诉打断】<br>
它真会发生吗？真有那么可怕吗？<br>
如果今天一定要动，卡住就是最差结果，我会做什么？——【填空：今天只写退款超时这一条话术，20 分钟】"<button class="copy">复制</button></div>
<p><strong>③ 被客户/老板骂之后（切断黑色想象）· 当场对自己说</strong></p>
<div class="script-box">"这是<strong>事实</strong>，还是我的念头？我基于什么判断'我不行'——有具体事件吗？<br>
【填空：客户骂的是流程超时这件事，不是我这个人。他明天就忘了，我还在想。】"<button class="copy">复制</button></div>
<p><strong>④ 完美主义不敢授权 · 授权前对自己说</strong></p>
<div class="script-box">"我不授权，是因为他真做不了，还是我怕【填空：失控 / 出错要我背 / 达不到我的标准】？<br>
这次我先交出【填空：这一件非关键的活】，允许他做到 70 分。"<button class="copy">复制</button></div>
<p><strong>⑤ 把恐惧接回优势（做完一件后用）· 每周问一次</strong></p>
<div class="script-box">"卡住我的这一点，和我的【填空：目标力怕不确定 / 引领力怕失控】有关系吗？我怎么发挥它去改善，而不是被它拽住？"<button class="copy">复制</button></div>
<p><strong>⑥ 对下属/同事的边界话术（别人甩活）· 微信可发</strong></p>
<div class="script-box">"这件事我先不接。我这周的重点是【填空】。如果你需要我支持，我们约【填空：周四下班前】过一遍，你先把【填空：卡点】列给我。"<button class="copy">复制</button></div>
<h2>五、复盘自问</h2>
<ol>
<li>我这次是<strong>知道不做 / 假不知道 / 真不知道 / 想离开</strong>？归类对了吗？</li>
<li>我挖出恐惧了吗，还是又只给自己列了一套方法和计划表？</li>
<li>今天的<strong>最小动作</strong>做了吗？如果没做，是动作还不够小，还是恐惧没挖到底？</li>
<li>我这周有没有把一件活真的交出去？交出去之后，我伸手了几次？</li>
</ol>
`
  },
  {
    slug: "sc-cs-motivation",
    no: "23",
    title: "场景卡 · 客服组员动力与反馈",
    subtitle: "团队管理 · 组员没动力、推诿工单",
    tag: "团队动力",
    category: "团队管理",
    featured: false,
    summary: "组员被投诉后越来越消极、难工单往外推？先存关系账户，再给事实反馈、找到她的动力位置。",
    html: `
<blockquote class="scene">对应框架卡：第19课-团队管理-动力问题 ＋ 第23课-反馈技术<br>
适用：组员没动力、推诿工单、被投诉后越来越消极，你想纠错又怕他炸。</blockquote>
<h2>一、场景画像</h2>
<p>客服组小 A 这周被客户投诉 3 次，都卡在退款环节；难工单她一律说"太忙"往同事那推，只接简单单。你嘴上没说，心里憋着，最后 SLA 快超时了自己上手兜底——她不领情，你两头受气。</p>
<h2>二、用哪张卡</h2>
<ul>
<li><strong>第23课 反馈技术</strong>（先用）：核心是<strong>不带评判的镜像呈现</strong>——事实（4W1H＋她原话）→ 我的感受/假设（不是结论）→ 可能性词汇收尾（"你觉得呢？"）。前提是<strong>关系账户余额够</strong>，不够先存钱。</li>
<li><strong>第19课 动力问题</strong>（后用）：核心是破除"我的动力＝下属的动力"，用<strong>动力觉察法</strong>找到她自己的动力位置，再借她的动力把工作激发起来。</li>
<li>关键判断：她是<strong>会做但不做</strong>（动力），不是不会做。别错翻 20 课。</li>
</ul>
<h2>三、操作步骤</h2>
<ol>
<li><strong>先存钱，不先下结论</strong>。用提问和倾听搞清她的现状和典型场景："最近退款单是什么情况？"——这一步只听，不纠。</li>
<li><strong>判断关系余额</strong>。看她投入度、表达欲、非言语是不是松弛。如果沉默 / "yes but" / 跳题，先退，改天再谈；<strong>推 2-3 次不行就停</strong>，硬推会掉分。</li>
<li><strong>给事实反馈，不给评价</strong>。说"本周你被投诉 3 次都在退款环节"，不说"你总跟客户急"。补一句感受与假设，收一句"你觉得呢？"</li>
<li><strong>切到动力觉察</strong>（同一次或第二次面谈）：① 让她做优势测评、读报告，先讲发光面建信心；② 和她讨论她的优势并正面认可；③ 就着优势探她的动力位置（被认可？验证一个方法有效？帮到人？）。</li>
<li><strong>把工作挂到她的动力位置上</strong>。例：共情力强 → 让她带新人做客户答疑、当"投诉话术样板"；分析力强 → 让她拆退款投诉的根因、出一版流程建议。</li>
</ol>
<p><strong>同时：</strong>停止替她兜底。救火队员这件事既无效又不讨好。</p>
<h2>四、可直接套的话术</h2>
<p><strong>① 纠错反馈（4W1H＋感受＋可能性）· 当面说</strong></p>
<div class="script-box">"我注意到本周有 3 单投诉都出在【退款】环节，最近的一次是【周三那单，客户说等了 4 天】。我听到你当时说【"这不是我能决定的"】，我的感受是你其实<strong>想快点帮客户解决</strong>，只是卡在了流程上——我不确定是不是这样，你觉得呢？"<button class="copy">复制</button></div>
<p><strong>② 探动力 · 一对一面谈</strong></p>
<div class="script-box">"你做事情最有劲的时候，通常是【被认可 / 自己验证了一个方法有用 / 实实在在帮到了客户】的时候，对吗？我们看看能不能把这种感觉带到【难工单/带新人】这件事里。"<button class="copy">复制</button></div>
<p><strong>③ 破"我的动力=你的动力"误区 · 当面说</strong></p>
<div class="script-box">"我不是要你像我一样盯 SLA 数字，你更吃【共情/沟通】这一套。我们换一个能让你动起来的方式——【填空：让你带新人答疑 / 让你出一版退款话术】，你愿意试一个月吗？"<button class="copy">复制</button></div>
<p><strong>④ 确认是不愿还是有困难 · 微信可发</strong></p>
<div class="script-box">"小 A，我看到【难工单/跨部门协调】这块最近一直接不动，我想确认一下，是你觉得这件事【没必要 / 没动力 / 有困难】？哪个更接近？先不用给我方案，说实话就行。"<button class="copy">复制</button></div>
<p><strong>⑤ 遇到阻抗时（她沉默/敷衍）· 当面说</strong></p>
<div class="script-box">"我看到你沉默了，是不是我刚说的让你不太舒服？如果是，你直接告诉我，我们换个说法聊。"<button class="copy">复制</button></div>
<h2>五、复盘自问</h2>
<ol>
<li>我刚才给的是<strong>事实描述</strong>还是<strong>评价</strong>？有没有引用她的原话、有没有留一句"你觉得呢"？</li>
<li>谈之前我判断过<strong>关系账户余额</strong>吗？她防御的时候我是退了，还是硬推了？</li>
<li>我找到她的<strong>动力位置</strong>了吗？还是我又在用"我的动力"要求她？</li>
<li>这周我有没有再替她兜底？如果有，那次我本可以问什么代替伸手？</li>
</ol>
`
  },
  {
    slug: "sc-warehouse-sla",
    no: "24",
    title: "场景卡 · 仓库 SLA 推诿与能力",
    subtitle: "团队管理 · 两边互相甩锅怎么解",
    tag: "团队能力",
    category: "团队管理",
    featured: false,
    summary: "仓库出库超时、和客服组互相推锅？管住自己的手，把责任交还回去，定交接口径让他们自己守。",
    html: `
<blockquote class="scene">对应框架卡：第20课-团队管理-能力问题（推诿部分参 第19课-动力问题）<br>
适用：仓库出库超时、盘点对账出错、和客服组互相推锅；你一兜底，团队能力永远上不来。</blockquote>
<h2>一、场景画像</h2>
<p>仓库这周有 3 单出库超 24 小时，客服组说仓库压单、仓库说客服信息给晚了，两边在群里对着甩。盘点表又对不上，你半夜自己把账重算一遍——第二天他们照旧，还多了一份"反正玲姐会兜"的依赖。</p>
<h2>二、用哪张卡</h2>
<ul>
<li><strong>第20课 能力问题</strong>：核心是<strong>管住自己的手</strong>。误区是"我的能力＝达成目标的唯一能力"；认知是<strong>管理岗是杠杆</strong>，用团队整体劳动时间 1+1&gt;2；方法是<strong>能力觉察法</strong>——测评建信心 → 讨论优势给认可 → 探索他的<strong>能力模式</strong>（面对目标他怎么用自己的优势达成）→ <strong>卡点时不伸手</strong>，回优势启发，忍住"黑色想象"。</li>
<li><strong>先分岔</strong>：出错是<strong>不会做</strong>（→ 20 课能力）还是<strong>不愿做/在推</strong>（→ 19 课动力，找动力位置）。同一个人可能两样都有，先处理动力再谈能力。</li>
<li><strong>推诿另加 第23课</strong>：在群里对甩时，别评价"你拖了大家后腿"，改成事实＋提问。</li>
</ul>
<h2>三、操作步骤</h2>
<ol>
<li><strong>拆事实，不拆立场</strong>。把 3 单超时的时间线摆出来（谁几点收到、几点出库），只呈现 4W1H，不定谁的责任。推诿多半死在"各说各的印象"。</li>
<li><strong>一对一分开谈，不在群里断案</strong>。群里断案 = 公开评判，两边都防御。</li>
<li><strong>判断不会 / 不愿</strong>：问"这一单你当时是怎么处理的？"如果他讲不出方法 → 不会；如果讲得出但没做 → 不愿。</li>
<li><strong>不会 → 交还责任＋只启发不代做</strong>：让他按<strong>自己顺手的方式</strong>先做一遍，你不插手；卡住时不给答案，回到他的优势问"你还能从哪试"。做完再一起看哪里能更好。</li>
<li><strong>推诿 → 定交接口径</strong>：让两边自己约定"信息几点前给、超时怎么报"，你只做见证，不做裁判。他们自己定的规则才有动力守。</li>
<li><strong>忍住"黑色想象"</strong>。他第一次做得比你慢、比你糙，是正常成本；你一伸手，能力和动力一起归零。</li>
</ol>
<h2>四、可直接套的话术</h2>
<p><strong>① 交还责任（把兜底还回去）· 当面说</strong></p>
<div class="script-box">"这次【填空：盘点表/超时单】你按你自己的方式先做，我做的过程中不插手；做完我们一起看哪里还能更好。做不完也没关系，卡在哪你告诉我。"<button class="copy">复制</button></div>
<p><strong>② 探他的能力模式 · 一对一</strong></p>
<div class="script-box">"你处理【填空：出库/对账】的时候，自己最顺手的办法是【填空：先按客户批次分堆 / 先把异常单挑出来】对吧？那这次就用你这一招，别学我的做法。"<button class="copy">复制</button></div>
<p><strong>③ 卡点启发（他来求救时的标准回应）· 当面或微信</strong></p>
<div class="script-box">"卡在这了？回到你【填空：细致/条理/沟通】这个优势上，你觉得还能从哪儿试一下？我先不替你做——你想出来的办法我们就用你的。"<button class="copy">复制</button></div>
<p><strong>④ SLA 超时的绩效沟通（关系不够时先存钱）· 一对一</strong></p>
<div class="script-box">"我注意到最近有 3 单出库超过 24 小时，最近一次是【填空：周二那单】。我先不下结论，想问你——你觉得卡在哪？"<button class="copy">复制</button></div>
<p><strong>⑤ 打断推诿、把责任交回两边 · 群里或碰头会</strong></p>
<div class="script-box">"我不追谁的责任。我要一个结果：【填空：客服几点前把订单信息给到仓库、仓库几点前出库、超时谁在群里报】。你们两边自己定，定完发我，我按你们定的看数据。"<button class="copy">复制</button></div>
<p><strong>⑥ 拒绝当救火队员 · 当面说</strong></p>
<div class="script-box">"这单我不接手了。不是不管你，是我一直替你做，你这块能力就一直起不来。你先做，卡住随时找我，我陪你想，但不替你写。"<button class="copy">复制</button></div>
<h2>五、复盘自问</h2>
<ol>
<li>这次我<strong>伸手了吗</strong>？如果伸了，我本可以问哪一句代替动手？</li>
<li>我是不是在用<strong>我的方法</strong>当唯一标准？他那套做法虽然不像我的，结果达成了吗？</li>
<li>这次谈的是能力还是动力？我判断对了吗（他是讲不出方法，还是讲得出没做）？</li>
<li>交接规则是<strong>我定的</strong>还是<strong>他们自己定的</strong>？他们自己定的，这周守住了几次？</li>
</ol>
`
  },
  {
    no: "C4",
    slug: "practice-rhythm",
    title: "练习节奏设计：让 7 张框架卡真反哺工作",
    subtitle: "每周 3 个锚点 + 遇到事随时翻，短平快把方法论用进现实",
    tag: "效率体系 · 刻意练习",
    category: "效率体系",
    featured: false,
    summary: "卡学完就吃灰？用「周一选主题 / 周三套场景 / 周五做复盘」3 个锚点 + 7 卡轮替表，让框架卡真正反哺工作。配套 WorkBuddy 定时提醒，不靠记性。",
    html: `<blockquote>目的：7 张框架卡已经"学完"了。本文件不教新东西，只解决一件事——<strong>怎么让卡真反哺工作</strong>。 设计前提：玲姐忙、要短平快、结果导向。所以节奏不靠"每天半小时"，靠<strong>每周 3 个锚点 + 遇到事随时翻</strong>。 配套文件：<code>01-周复盘模板.md</code>（每周五填）。</blockquote>
<hr/>
<h2>一、周节奏（短平快版，每周只抓 3 个锚点）</h2>
<table class="ref-table"><thead><tr><th>锚点</th><th>时间</th><th>耗时</th><th>动作（就一件事）</th></tr></thead><tbody><tr><td><strong>周一·选主题</strong></td><td>周一早（≤3 分钟）</td><td>3 分钟</td><td>从轮替表选 1 张卡当"本周主题"，并在日历/脑子里定 1 个"这周要拿它试的真实场景"。</td></tr><tr><td><strong>周三·套场景</strong></td><td>遇事就做（≤5 分钟）</td><td>5 分钟</td><td>真遇到事，先翻那张卡看模型/话术，照着用 1 次。没遇到就跳过，不补。</td></tr><tr><td><strong>周五·做复盘</strong></td><td>周五下班前</td><td>5 分钟</td><td>打开 <code>01-周复盘模板.md</code>，照着填完 5 项 + 3 道自我觉察。</td></tr></tbody></table>
<p><strong>三条保底线（防止放弃）：</strong></p>
<ol><li>不要求每天练。周一没选、周三没套都行，<strong>周五 5 分钟复盘填了就算这周达标</strong>。</li><li>主题卡默认按轮替表走，但<strong>本周某件事特别痛，允许"痛点优先"直接换卡</strong>——练痛的比练计划的有用。</li><li>所有动作都"就地发生"：场景在微信/会议里就当场翻卡，不另开时间。</li></ol>
<hr/>
<h2>二、练什么：7 张卡怎么轮替</h2>
<p><strong>轮替规则：</strong> 每周 1 张主题卡，按"同主题相邻"排，7 周一轮回；第 7 周回炉本周循环里<strong>你最没用顺手的那张</strong>。</p>
<h3>示例 4 周轮替表（直接照这 4 周起步）</h3>
<table class="ref-table"><thead><tr><th>周次</th><th>主题卡</th><th>一句话本周目标</th></tr></thead><tbody><tr><td>第 1 周</td><td>17 向上管理·回避模式</td><td>主动和老板谈 1 次"资源/诉求"，不再只埋头做 SLA。</td></tr><tr><td>第 2 周</td><td>18 向上管理·辩论模式</td><td>和老板意见冲突时，不吵不躲，用合作思维把话说清。</td></tr><tr><td>第 3 周</td><td>19 团队管理·动力问题</td><td>找出 1 个没干劲的下属，先谈"想不想"再谈"怎么做"。</td></tr><tr><td>第 4 周</td><td>20 团队管理·能力问题</td><td>面对"不会做"的下属，用教带代替自己上手。</td></tr></tbody></table>
<blockquote>第 5 周起续接：21 自我管理 → 22 提问技术 → 23 反馈技术 → 回炉最弱项，然后循环。 完整 7 张：17 回避 / 18 辩论 / 19 动力 / 20 能力 / 21 自我 / 22 提问 / 23 反馈。</blockquote>
<hr/>
<h2>三、怎么练：3 种方式（按场景选，不全做）</h2>
<p><strong>① 真实场景拆解（主力，遇到事就翻卡）</strong></p>
<ul><li>漏斗：发生什么 → 翻哪张卡 → 套哪个模型/话术 → 周五复盘记一笔。</li><li>最适合：向上管理、团队管理这类"当天就有事"的卡。</li></ul>
<p><strong>② 教练陪练角色扮演（开口练，和 AI 模拟）</strong></p>
<ul><li>把真实场景丢给 WorkBuddy/CodeBuddy，让它扮演<strong>老板 / 下属 / 客户</strong>，你先说，AI 对照框架卡给你反馈"哪里能更准"。</li><li>最适合：<strong>18 辩论模式、23 反馈技术、17 回避模式</strong>——这些卡不开口练就永远停留在"看懂了"。</li><li>提示词模板：「我是玲姐，接下来你扮演【角色】，场景是【一句话】。我先回，你对照【卡名】的模型和话术点我哪里能更好。」</li></ul>
<p><strong>③ 定期刻意练习题（每月深练 1 张）</strong></p>
<ul><li>每张卡底部都有 <code>⑧ 练习题</code>（自测 + 实战）。每月 1 号挑 1 张，做它的自测和实战题，写进场景库。</li><li>最适合：22 提问、21 自我这类"需要内化"的卡。</li></ul>
<hr/>
<h2>四、WorkBuddy 自动化兜底（✅ 可设定时提醒）</h2>
<p>这些不用靠记性，让系统兜底：</p>
<ul><li>✅ <strong>每周一 09:00</strong>：提醒「选本周主题卡 → 看轮替表 → 定 1 个真实场景」（ recurrence: 每周一）。</li><li>✅ <strong>每周五 17:30</strong>：提醒「5 分钟填 <code>01-周复盘模板.md</code>」（ recurrence: 每周五）。</li><li>✅ <strong>每月 1 日 09:00</strong>：提醒「本月挑 1 张卡，做它的 ⑧ 刻意练习题」。</li><li>✅ <strong>随时记录真实场景</strong>：把一句话场景直接丢给 WorkBuddy，让它归到 <code>03-场景库/</code>，周三翻卡时直接调。</li></ul>
<blockquote>说明：以上提醒可在 WorkBuddy「自动化」里设成定时任务，到点弹提醒，不占你精力。</blockquote>
<hr/>
<h2>五、底线判据：有没有真用上</h2>
<p>不在"看了几张卡"，在"这周有没有一次套用 + 一次复盘"。</p>
<ul><li>达标周：<strong>至少 1 次真实套用 + 周五填了模板</strong>。</li><li>连续 2 周没达标 → 不是你懒，是节奏太重，回到"只做周五 5 分钟复盘"的最低档。</li></ul>
<hr/>
<h3>本周就能启动的 3 步</h3>
<ol><li>打开轮替表，定第 1 周主题卡 = <strong>17 向上管理·回避模式</strong>。</li><li>在脑子/日历里放 1 个这周要试的真实场景（如：找老板要客服编制）。</li><li>复制一份 <code>01-周复盘模板.md</code>，周五下班前填。</li></ol>`
  },
  {
    no: "C5",
    slug: "weekly-review",
    title: "周复盘模板：每周五 5 分钟，把卡用进现实",
    subtitle: "复制此份，只填「发生了什么 + 我怎么说的 + 下次改哪句」",
    tag: "效率体系 · 复盘",
    category: "效率体系",
    featured: false,
    summary: "一份可直接复制去填的周复盘模板：本周卡片、套了哪个场景、当时怎么说的、效果如何、下周改 1 件事，再加 3 道自我觉察。5 分钟，不写反思散文。",
    html: `<blockquote>用法：每周五下班前花 5 分钟，把下面的空填了。只填"发生了什么 + 我怎么说的 + 下次改哪句"，不写反思散文。</blockquote>
<hr/>
<h2>一、本周卡片</h2>
<ul><li><strong>主题卡</strong>：第__课 · ___________（如：17 向上管理·回避模式）</li><li><strong>一句话核心</strong>：________________________________________</li></ul>
<h2>二、套了哪个真实场景</h2>
<ul><li><strong>场景</strong>（一句话）：____________________________________</li><li><strong>发生时间/对象</strong>：____________________________________</li></ul>
<h2>三、当时怎么说的（话术回顾）</h2>
<blockquote>贴原话或关键词，别修饰。</blockquote>
<ul><li>我实际说的 / 想说的：__________________________________</li><li>套用了卡里的哪句模型或话术：__________________________</li></ul>
<h2>四、效果如何</h2>
<ul><li><strong>客观结果</strong>（对方反应 / 事推进没）：____________________</li><li><strong>自我感受</strong>（顺 / 卡 / 后悔没早说）：____________________</li></ul>
<h2>五、下周改进 1 件事</h2>
<ul><li>只写 1 件，具体可做的：________________________________</li><li>例：「下周和老板谈预算，先把'维持 SLA 需要 X 人，否则风险是 Y'这句话写下来再开口。」</li></ul>
<hr/>
<h2>六、自我觉察 3 问（勾或写一句）</h2>
<ol><li>这周这张卡，我是<strong>真用上了</strong>，还是<strong>只是看了眼</strong>？</li><li>[ ] 真用上　[ ] 只看没用　[ ] 这周根本没碰</li><li>如果重来一次，我<strong>哪句话会说得更准 / 更早</strong>？</li><li>____________________________________________________</li><li>这张卡<strong>下周还会在我哪个场景出现</strong>？（提前想好，周三直接套）</li><li>____________________________________________________</li></ol>
<hr/>
<blockquote>填完即可。连续 2 周"只看了眼 / 没碰" → 节奏太重，下周退到"只做这一步"也行。 真实场景想留档，丢给 WorkBuddy 归到 <code>03-场景库/</code>。</blockquote>`
  },
  // === NEW_ARTICLES_HERE ===
];
