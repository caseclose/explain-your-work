# Explain Your Work

你有没有遇到过这种情况？你和 Agent 跑完实验，把结果发给同事。到了组会，刚讲完结论，就有人问：“这次训练到底用了多少条数据？”你记得导出过一批样本，却拿不准训练实际读了多少。另一位同事指着表格问：“这里的成功率怎么算？工具都调用成功了，任务就算完成了吗？”你只好一边说“等我找一下”，一边往上翻和 AI 的聊天记录。

我做 Explain Your Work，就是想把翻记录的时间挪到会前。交付时，让 Agent 对着这次实验的日志、评测代码和具体案例，把同事最可能问的问题整理成一页底稿。开会前合上底稿，让它扮演同事，一次问一题。哪一句讲不清，就回到对应的证据看一眼，再用自己的话讲一遍。

**Explain Your Work** helps you prepare for a meeting or handoff. Turn the evidence from a run into a one-page brief, then practice answering a colleague’s follow-up questions in your own words.

## Install for your agent

This repository ships one [Agent Skills](https://agentskills.io/specification) bundle. The same instructions, template, and synthetic example work without host-specific hooks, scripts, or permissions.

From the project where you want to use it:

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work
```

Choose your agent in the installer, or pass one or more targets explicitly, for example:

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work \
  --agent claude-code codex cursor gemini-cli kimi-code-cli opencode github-copilot openclaw cline
```

For **Hermes Agent**, you can also use its native installer:

```bash
hermes skills install caseclose/explain-your-work/skills/explain-your-work
```

For another Agent Skills client, copy the whole [`skills/explain-your-work`](skills/explain-your-work) folder into a skills directory that client scans. **No skills support?** Paste [PROMPT.md](PROMPT.md) into any chat agent and attach only the relevant, shareable evidence. Without file access, it drafts in chat and cannot verify files you did not provide.

## Use it

Ask in plain language (the exact command syntax depends on the host):

| When | Example request |
| --- | --- |
| Before an important run | “Use Explain Your Work to plan what evidence to save. Don't start the run.” / “这次要上组会，先帮我列留痕清单。” |
| At delivery or for an earlier run | “Use Explain Your Work to make a one-page handoff from the actual run.” / “给这次实验出一页组会底稿，没证据的标待核实。” |
| Before the meeting | “Use Explain Your Work to quiz me. One question at a time.” / “来一轮闭卷追问，每次只问一题。” |

The [handoff template](skills/explain-your-work/assets/HANDOFF.md) links every load-bearing claim to evidence. Exported rows are not verified training consumption, and a failed case does not prove its cause. You still inspect the case and answer the questions yourself. Try the [synthetic smoke tests](examples/README.md) without sharing real work data.

Previously called `evidence-handoff`. Install the new name; you can remove the old copy after verifying the new one. [MIT license](LICENSE).
