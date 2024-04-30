# Built-In Operations

Overview of the primitive and the array Nada operations.

## Primitive Operations

| Name                                                              | Syntax                                              | Supported Types<br/> (`P: Public`, `S: Secret`)                                                           |
| ----------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Addition                                                          | `x + y`                                             | `P ← P + P`,<br/> `S ← P + S`,<br/> `S ← S + P`,<br/> `S ← S + S`                                         |
| Subtraction                                                       | `x - y`                                             | `P ← P - P`,<br/> `S ← P - S`,<br/> `S ← S - P`,<br/> `S ← S - S`                                         |
| Multiplication                                                    | `x * y`                                             | `P ← P * P`,<br/> `S ← P * S`,<br/> `S ← S * P`,<br/> `S ← S * S`                                         |
| Power                                                             | `x ** y`                                            | `P ← P ** P`                                                                                              |
| Division                                                          | `x / y`                                             | `P ← P / P`,<br/> `S ← P / S`,<br/> `S ← S / P`,<br/> `S ← S / S`                                         |
| Modulo                                                            | `x % y`                                             | `P ← P % P`,<br/> `S ← P % S`,<br/> `S ← S % P`,<br/> `S ← S % S`                                         |
| Shifts                                                            | `x << y`,<br/> `x >> y`                             | `P ← P << P`,<br/> `S ← S << P` |
| Probabilistic truncation                                          | `x.trunc_pr(y)`                                     | `S ← S.trunc_pr(P)` |
| Comparisons                                                       | `x < y`,<br/> `x <= y`,<br/> `x > y`,<br/> `x >= y` | `P ← P < P`,<br/> `S ← P < S`,<br/> `S ← S < P`,<br/> `S ← S < S`                                         |
| Ternary _"if else"_<br/> (public condition)                       | `cond.if_else(x, y)`                                | `P ← P.if_else(P, P)`,<br/> `S ← P.if_else(P, S)`,<br/> `S ← P.if_else(S, P)`,<br/> `S ← P.if_else(S, S)` |
| Ternary _"if else"_<br/> (secret condition)                       | `cond.if_else(x, y)`                                | `S ← S.if_else(P, P)`,<br/> `S ← S.if_else(P, S)`,<br/> `S ← S.if_else(S, P)`,<br/> `S ← S.if_else(S, S)` |
| Reveal _(convert a private<br/> value into a public value)_       | `x.reveal()`                                        | `P ← S.reveal()`                                                                                          |
| Public Equality _(publicly output<br/> if two secrets are equal)_ | `x.public_equals(y)`                                | `P ← S.public_equals(S)`                                                                                  |

## Array Operations _(Experimental Feature)_

:::warning

Arrays are a new feature in the Nada language. We hope you find them handy, though there might still be undiscovered bugs. If you encounter anything, please let us know by reporting them in [Bugs](https://github.com/orgs/NillionNetwork/discussions/categories/bugs).

:::

| Name     | Syntax                                                                        | Description                                                                                                                                                                                                                                                       |
| -------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nada_fn  | `nada_fn(lambda x: x, args_ty={'x': SecretInteger}, return_ty=SecretInteger)` | Inline function, only to be used with `map` and `reduce`.                                                                                                                                                                                                         |
| map()    | `array.map(nada_fn(...))`                                                     | Applies the provided `nada_fn` to every element in the array.                                                                                                                                                                                                     |
| reduce() | `array.reduce(nada_fn(...), acc)`                                             | The `reduce()` method executes a provided function (`nada_fn`) once for each element in the array, resulting in a single output value. The `nada_fn` accepts two arguments: 1. The accumulator `acc` accumulates the return values. 2. Each element of the array. |
| zip()    | `array_1.zip(array_2)`                                                        | Combines two arrays into an array of Tuples.                                                                                                                                                                                                                      |
| unzip()  | `unzip(array_1.zip(array_2))`                                                 | Returns a tuple of two arrays.                                                                                                                                                                                                                                    |
