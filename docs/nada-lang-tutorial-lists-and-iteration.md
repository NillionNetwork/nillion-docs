# Lists and Iteration

The Nada DSL supports the use of iteration over lists that contain secret integer values. This includes limited use of `for` loops.

## Voting Example using Iteration over Lists

The program below assembles the secret votes from four voting parties (*i.e.*, `voters`) and returns the total for each of the two candidates. Because each voting party submits an input of either `1` or `2` for candidate, the value `Integer(4)` is subtracted from the total for each candidate.

<iframe src='img/nada-lang-tutorial-lists-and-iteration-0.html' height='720px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def total(xs: list[SecretInteger]) -> SecretInteger:
    return xs[0] + xs[1] + xs[2] + xs[3]

def nada_main():
    # Create the voter parties and the voting official party.
    voters: list[Party] = []
    for v in range(4):
        voters.append(Party("voter" + str(v)))
    official = Party(name="official")

    # Gather the inputs (one vote for each candidate from each voter).
    votes_per_candidate: list[list[SecretInteger]] = []
    for c in range(2):
        votes_per_candidate.append([])
        for v in range(4):
            votes_per_candidate[c].append(SecretInteger(
                Input(
                    name="voter" + str(v) + "_candidate" + str(c),
                    party=Party("voter" + str(v))
                )
            ))

    # Calculate and return the total for each candidate.
    # Calculate the total for each candidate.
    outputs: list[Output] = []
    for c in range(2):
        outputs.append(
            Output(
                total(votes_per_candidate[c]) - Integer(4),
                "candidate" + str(c),
                official
            )
        )

    return outputs
```-->

A `for` loop is used to build up the list of parties corresponding to the voters using the `append` method. A `for` loops nested inside another `for` loop is used to assemble a list of lists `votes_per_candidate` that contains two lists (*i.e.*, a list of the votes submitted for each of the two candidates). Finally, the list of outputs is assembled using a `for` loop.
