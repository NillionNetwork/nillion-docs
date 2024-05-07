# Lists and Comprehensions

The Nada DSL supports the introduction and use of Python lists that contain secret integer values. This includes using a subset of the list comprehension syntax supported by Python.

## Basic Example

The program below uses [Python list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) to build an ascending sequence of three secret integers in which the first entry is a secret integer input. This sequence of secret integers is then returned by the program.

<iframe src='img/nada-lang-tutorial-lists-and-comprehensions-0.html' height='278px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def nada_main():
    data_owner = Party(name="data_owner")

    start = SecretInteger(Input(name="start", party=data_owner))

    sequence = [start + Integer(i) for i in range(3)]

    return [
        Output(sequence[i], "sequence_" + str(i), data_owner)
        for i in range(3)
    ]
```-->

## Voting Example using List Comprehensions

The program below assembles the secret votes from four voting parties (*i.e.*, `voters`) and returns the total for each of the two candidates. Because each voting party submits an input of either `1` or `2` for each candidate, the value `Integer(4)` is subtracted from the total for each candidate.

<iframe src='img/nada-lang-tutorial-lists-and-comprehensions-1.html' height='640px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def total(xs: list[SecretInteger]) -> SecretInteger:
    return xs[0] + xs[1] + xs[2] + xs[3]

def nada_main():
    # Create the voter parties and the voting official party.
    voters = [Party("voter" + str(v)) for v in range(4)]
    official = Party(name="official")

    # Gather the inputs (one vote for each candidate from each voter).
    votes_per_candidate = [
        [
            SecretInteger(
                Input(
                    name="voter" + str(v) + "_candidate" + str(c),
                    party=Party("voter" + str(v))
                )
            )
            for v in range(4)
        ]
        for c in range(2)
    ]

    # Calculate and return the total for each candidate.
    return [
        Output(
            total(votes_per_candidate[c]) - Integer(4),
            "candidate" + str(c),
            official
        )
        for c in range(2)
    ]
```-->

A list comprehension is used to construct the list of parties corresponding to the voters. An expression containing a [Python list comprehension nested in another list comprehension](https://docs.python.org/3/tutorial/datastructures.html#nested-list-comprehensions) is used to assemble a list of lists `votes_per_candidate` that contains two lists (*i.e.*, a list of the votes submitted for each of the two candidates). Finally, a list comprehension is used to build the list of outputs.
