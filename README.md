# Explain Your Work

**The agent did the work. Can you explain what happened, what the evidence supports, and where it stops?**

Agent 帮你做完，结果你能用自己的话讲清楚，也能当场找到证据。这个 Skill 把实验留痕、一页组会底稿和闭卷追问放进同一个流程，适用于组会、技术评审和交接。

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
