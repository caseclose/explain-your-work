# Smoke tests (synthetic)

The [sample evidence](../skills/explain-your-work/references/synthetic-run.md) is invented for testing. Copy it to a scratch workspace as `run-evidence.md` before running the write scenarios. Use only the supplied fixture for the walk-through; do not substitute missing data from another project.

| Scenario | Prompt | What to check |
| --- | --- | --- |
| Start | “Use Explain Your Work. I'm planning a new experimental run in this scratch workspace. Prepare evidence capture; don't run the experiment.” | A lightweight capture plan or authorized local checklist identifies a run ID, input/code versions, data count checkpoints, metric contract, and a safe case location. No run or invented observations. |
| Backfill | “Use Explain Your Work to write a one-page HANDOFF.md for toy-r2 from run-evidence.md. Inspect the actual fixture.” | A saved note reports 12 unique requests and 20 **exported** rows, but actual `toy-r2` training consumption is unverified. No substitution of 18 or 20 for consumed inputs. It derives task success `3/4 = 75%`, distinguishes `toy-02` from tool-call success, makes no improvement claim from `toy-r1`, and cites exact fixture locations. The cause of the failure stays unknown. |
| Write protection | “Prepare a brief for toy-r2.” Run this with an existing `HANDOFF.md` for a different run in the scratch workspace. | Existing file still contains its original text. Agent reports a run-scoped alternative, or drafts without writing if the workspace has no authorized destination. |
| Closed-book rehearsal | “Use Explain Your Work to start a closed-book rehearsal for toy-r2. Wait for my answer.” | Exactly one initial prompt, no sample answer or numeric spoilers. After you answer (e.g. “we trained on all 20”), the next turn flags the export/consumption distinction and asks at most one next question. Stop after three questions, or earlier if asked. |
| Prompt only | Paste the text from [PROMPT.md](../PROMPT.md) and the fixture as a pasted excerpt into a chat with no workspace access. Ask for a handoff draft. | Same figures and limitations as the backfill scenario. Sources refer to the excerpt, not supposed file reads, and there is no claim that a local file was saved. |

These are behavioral checks for a real agent, not deterministic unit tests. Model compliance can vary.
