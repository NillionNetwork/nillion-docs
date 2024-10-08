---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Nada Execution Plan

A Nada Program is made of a sequence of instructions (protocols) that to be executed by the nodes. However, these instructions are not executed in the order that they appear in the program, they are reorganized in an early stage according to the dependencies between them. The purpose of this process is to minimize the number of communication rounds. The result of this reorganization is called the Execution Plan for the program. The Execution Plan specifies the way that how the program will be executed inside the NilVM in each Nillion node.

`nada` provides different ways to print the execution plan of a program. For instance, when we execute the command `nada run`  with the flag `--metrics-execution-plan`. The result will be a set of metrics that are ordered following the Execution Plan.

<Tabs>

<TabItem value="metrics" label="Execution Plan metrics">

```
Summary:
Preprocessing elements:
		Compare: 1

Execution metrics:
	Execution duration: 
		5ms 880us 847ns

	Compute duration: 
		total duration: 104us 787ns (min: 9us 715ns, max: 168us 126ns)

	Total rounds: 3
	Total network messages size: 1.19 kB

	Local protocols: (execution order)
		Not:
			calls: 1
			total duration: 9us 648ns (min: 6us 33ns, max: 21us 600ns)

	Online protocols: (execution order)
		LessThanShares:
			calls: 1
			total duration: 892us 741ns (min: 819us 492ns, max: 1ms 154us 380ns)
			total network messages size: 1.19 kB



Execution Plan:
Step #0:

	Count of communication rounds: 3
		Round #0 message size: 23
		Round #1 message size: 1139
		Round #2 message size: 23

	Protocols:
		addr(2) - LessThanShares:
			Execution step: 0
			Total duration: 892us 741ns
			Number of communication rounds: 3
			Total message size: 1185
			Used preprocessing elements:
				- Compare: 1


Step #1:

	Count of communication rounds: 0

	Protocols:
		addr(3) - Not:
			Execution step: 1
			Total duration: 9us 648ns
			Number of communication rounds: 0
			Total message size: 0



```

</TabItem>

<TabItem value="program" label="Nada Program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/comparison_gte.py
```
</TabItem>

</Tabs>

Looking at the resulting file, we can see that the Execution Plan organizes the protocols into Execution Steps. This is the group of protocols that can be executed in parallel, because all their inputs have been resolved in some previous step. The steps are divided into two stages:
- Local: The [local protocols](/glossary#Local-Protocol) that are contained in the Execution Step. They are executed before the online protocols.
- Online: Once the local protocols have been executed, the [online protocols](/glossary#Online-Protocol) of the step can be executed.