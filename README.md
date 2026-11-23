# Evidence Handoff

A Hermes Agent skill for presenting and handing off agent-assisted work. Replace live chat-history digging with a short, evidence-linked `HANDOFF.md` and a three-question rehearsal.

## Install

Install the complete bundle (including its template and synthetic example) from GitHub:

```bash
hermes skills install caseclose/evidence-handoff/skills/evidence-handoff
```

Then run `/evidence-handoff` in Hermes, followed by what you want to do. You can also copy the whole [`skills/evidence-handoff`](skills/evidence-handoff) directory into the active profile's skills directory. No project dependency, background job, or extra service is required by the skill itself.

## Use it

| When | Example request |
| --- | --- |
| Before an important run | “Plan evidence capture for this run. Don't start it yet.” / “这次实验要上组会，先帮我列留痕清单。” |
| At delivery, or after an older run | “Generate a one-page HANDOFF.md for this run. Check the real results and label gaps.” / “给这次 run 出一页组会底稿，缺证据的标待核实。” |
| Before the meeting | “Rehearse with me. One question at a time.” / “来一轮组会追问，每次只问一题，等我回答。” |

The file is a working index: conclusion, data quantities and units, the main metric or acceptance check, one concrete case, one important limit, and locations of the original evidence. It does not turn exported rows into actual training consumption or an observation into a root cause. You still inspect the case and answer the rehearsal yourself.

See the [handoff template](skills/evidence-handoff/templates/HANDOFF.md) and the [synthetic smoke tests](examples/README.md). The repository contains no real experiment evidence. Keep real handoffs and artifacts inside their authorized workspace.

[MIT license](LICENSE).
