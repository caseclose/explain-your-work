<h1 align="center">Explain Your Work</h1>
<p align="center">把和 Agent 一起做的实验整理成一页组会底稿，用自己的话讲清楚。</p>
<p align="center"><a href="README.md" lang="en">English</a> · <strong>简体中文</strong></p>

你有没有遇到过这种情况？你和 Agent 跑完实验，把结果发给同事。到了组会，刚讲完结论，就有人问：“这次训练到底用了多少条数据？”你记得导出过一批样本，却拿不准训练实际读了多少。你还在往上翻聊天记录，另一位同事已经指着表格问：“这里的成功率是怎么算的？”

我做 **Explain Your Work**，就是想把翻记录的时间挪到会前。交付时，让 Agent 对着这次实验的日志、评测代码和具体案例，把同事最可能问的问题整理成一页底稿。开会前合上底稿，让它扮演同事，一次问一题。哪一句讲不清，就回到对应的证据看一眼，再用自己的话讲一遍。

## 底稿里的一道追问

> **“两次工具调用都成功了，为什么这个任务还算失败？”**
>
> 这个任务要求把报告提交评审。Agent 写好了草稿就停了。评测看的是报告有没有提交，所以这条算失败。

这个回答对应仓库合成示例里的 `toy-02`。打开记录，就能对照评分规则和这条任务的实际结果。[查看示例原始记录](skills/explain-your-work/references/synthetic-run.md) · [查看一页底稿模板](skills/explain-your-work/assets/HANDOFF.md)

## 快速开始

在项目目录下运行这条命令，然后在安装器里选择你使用的 Agent。

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work
```

安装后，直接在对话里输入 **EYW** 或 **eyw**，后面接上你要做的事。

| 什么时候用 | 可以这样问 |
| --- | --- |
| **实验开始前** | “EYW，帮我列一下，这次组会要用到哪些计数和日志？先别启动实验。” |
| **交付结果时** | “eyw，给这次实验出一页组会底稿。写清每个数字在数什么、去哪里查，还有哪些地方待核实。” |
| **开组会之前** | “eyw，扮演同事来问我。一次问一题，等我答完，挑我没说清楚的地方继续追问。” |

想先试一遍？用合成数据走一遍[练习场景](examples/README.md)就行。也可以把[独立提示词](PROMPT.md)粘贴到聊天窗口，再附上希望它参考的材料片段，直接用中文提问。

<details>
<summary><strong>其他安装方式</strong></summary>

如果想指定 Agent，可以把名称传给安装器。比如，同时给 Codex 和 Claude Code 安装，可以运行下面这条命令。

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work --agent codex claude-code
```

Hermes Agent 可以使用自带的安装命令。

```bash
hermes skills install caseclose/explain-your-work/skills/explain-your-work
```

其他遵循 [Agent Skills 规范](https://agentskills.io/specification)的客户端，可以把整个[技能目录](skills/explain-your-work)复制到客户端会扫描的技能目录下。

</details>

---

[MIT 许可证](LICENSE) · 项目曾用名为 `evidence-handoff`。如果安装过旧版，先确认新版可用，再移除旧副本。
