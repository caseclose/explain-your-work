# Synthetic example — not real experiment data

## Run metadata

- Run ID: `toy-r2`; revision: `toy-v2`; data version: `toy-data-v1`.
- Dataset export report (`toy-r2`): 12 unique requests produced 20 exported training examples. Unit: one exported row. No trainer-consumption record was retained.
- Local hand-written note (unverified): “20 samples trained.” The note is not trainer telemetry.
- Archived trainer from `toy-r1` reports 18 consumed examples; this is not `toy-r2` evidence.

## Evaluator contract

Task success = tasks with `final_verified = yes` divided by all evaluated tasks, including those with failed tool calls. Tool-call success is a separate diagnostic: successful calls divided by attempted calls. Higher is better for this example.

## Raw evaluator rows

| Task | Expected outcome | Observed outcome | Final verified | Tool calls OK / attempted |
| --- | --- | --- | --- | --- |
| toy-01 | Save a note | Correct note saved | yes | 2 / 2 |
| toy-02 | Send report to review | Report drafted but not submitted | no | 2 / 2 |
| toy-03 | Sort a list | Correct order verified | yes | 1 / 1 |
| toy-04 | Read a demo record | Demo record read | yes | 1 / 2 |

## Baseline note

`toy-r1` reports 2 of 3 tasks verified. Its task list and scoring revision were not retained. Do not assume it is comparable with `toy-r2`.

There is no diagnostic evidence explaining why `toy-02` was not submitted.
