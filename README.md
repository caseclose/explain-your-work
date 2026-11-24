<h1 align="center">Explain Your Work</h1>
<p align="center">Turn an agent-assisted experiment into a one-page brief you can explain in your own words.</p>
<p align="center"><strong>English</strong> · <a href="README.zh-CN.md" lang="zh-CN">简体中文</a> · <a href="https://caseclose.github.io/explain-your-work/">Try the rehearsal deck</a></p>

Ever been in a lab meeting where someone asks, “How many examples did we actually train on?” You remember how many rows you exported. Did the trainer read them all? While you’re scrolling through the chat, someone points at the results table and asks what “success” means.

I built **Explain Your Work** so I could do that digging before the meeting. At handoff, the agent reads the run’s logs, scoring code, and examples, then writes a brief around the questions a colleague is likely to ask. Before the meeting, close the brief and let the agent ask those questions one at a time.

## A question from the brief

> **“Both tool calls succeeded. Why did this task fail?”**
>
> The task was to submit a report for review. The agent drafted the report and never submitted it. The evaluator checks whether the report was submitted, so this task counts as a failure.

That answer comes from one row, `toy-02`, in the bundled synthetic run. The scoring rule and the observed outcome are both there to check. [Inspect the example](skills/explain-your-work/references/synthetic-run.md) · [See the one-page template](skills/explain-your-work/assets/HANDOFF.md)

## Quick start

Run this in your project and choose your agent in the installer.

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work
```

After installation, type **EYW** (or **eyw**) in chat, followed by what you need.

| When | Ask your agent |
| --- | --- |
| **Before a run** | “EYW, plan which counts and logs to save for the lab meeting. Leave the run for later.” |
| **At handoff** | “eyw, make a one-page brief for this run. Show what each number counts, where it came from, and what we still need to verify.” |
| **Before the meeting** | “eyw, quiz me on this run. Ask one question, wait for my answer, and follow up on anything I leave unclear.” |

Want to try it first? Use the [practice scenarios](examples/README.md) with the synthetic run. You can also paste the [standalone prompt](PROMPT.md) into a chat and attach the excerpts you want it to use. The agent can work from the material you share.

<details>
<summary><strong>Other ways to install</strong></summary>

To target specific agents, pass their names to the installer. For example, to install for Codex and Claude Code together, run the following command.

```bash
npx skills add caseclose/explain-your-work --skill explain-your-work --agent codex claude-code
```

For Hermes Agent, use its native installer.

```bash
hermes skills install caseclose/explain-your-work/skills/explain-your-work
```

For other [Agent Skills](https://agentskills.io/specification) clients, copy the entire [skill folder](skills/explain-your-work) into a skills directory your client scans.

</details>

---

[MIT license](LICENSE) · Previously published as `evidence-handoff`. If you have the old copy, verify the new installation before removing it.
