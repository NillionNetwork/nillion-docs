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
| Shifts                                                            | `x << y`,<br/> `x >> y`                             | `P ← P << P`,<br/> `S ← S << P`                                                                           |
| Probabilistic truncation                                          | `x.trunc_pr(y)`                                     | `S ← S.trunc_pr(P)`                                                                                       |
| Comparisons                                                       | `x < y`,<br/> `x <= y`,<br/> `x > y`,<br/> `x >= y` | `P ← P < P`,<br/> `S ← P < S`,<br/> `S ← S < P`,<br/> `S ← S < S`                                         |
| Ternary _"if else"_<br/> (public condition)                       | `cond.if_else(x, y)`                                | `P ← P.if_else(P, P)`,<br/> `S ← P.if_else(P, S)`,<br/> `S ← P.if_else(S, P)`,<br/> `S ← P.if_else(S, S)` |
| Ternary _"if else"_<br/> (secret condition)                       | `cond.if_else(x, y)`                                | `S ← S.if_else(P, P)`,<br/> `S ← S.if_else(P, S)`,<br/> `S ← S.if_else(S, P)`,<br/> `S ← S.if_else(S, S)` |
| Reveal _(convert a private<br/> value into a public value)_       | `x.reveal()`                                        | `P ← S.reveal()`                                                                                          |
| Private Equality                                                  | `x == y`                                            | `S ← S == S`,<br/> `S ← S == P`,<br/> `S ← P == S`,<br/> `P ← P == P`                                     |
| Public Equality _(publicly output<br/> if two secrets are equal)_ | `x.public_equals(y)`                                | `P ← S.public_equals(S)`                                                                                  |
