# Data Types

Overview of the primitive and the compound Nada data types.

## Primitive Data Types

| `Public`                | `Secret`                | `Literals`        |
| ----------------------- | ----------------------- | ----------------- |
| `PublicInteger`         | `SecretInteger`         | `Integer`         |
| `PublicUnsignedInteger` | `SecretUnsignedInteger` | `UnsignedInteger` |

`Public` and `Secret` data types can be used to specify user inputs as:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretUnsignedInteger(Input(name="b", party=party2))
c = PublicInteger(Input(name="c", party=party1))
d = PublicUnsignedInteger(Input(name="d", party=party2))
```

Similarly, `Literals` can only be used within a program as:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretUnsignedInteger(Input(name="b", party=party2))
new_int = a + Integer(13)
new_uint = b + UnsignedInteger(13)
```

## Compound Data Types _(Experimental Feature)_

:::warning

Compound types are a new feature in the Nada language. We hope you find them handy, though there might still be undiscovered bugs. If you encounter anything, please let us know by reporting them in [Bugs](https://github.com/orgs/NillionNetwork/discussions/categories/bugs).

:::

Nada also support compound types, which include `Array`s and `Tuple`s.

An `Array` has a fixed number of fields which can be any of a [Primitive Data Type](/nada-lang-types#primitive-data-types) or a [Nada Compound Data Type](/nada-lang-types#compound-data-types-experimental-feature), _but all need to be of the same type_. For example:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretInteger(Input(name="b", party=party1))
my_integer_array = Array.new(a, b)
```

or more complicated like:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretInteger(Input(name="b", party=party1))
c = SecretInteger(Input(name="c", party=party1))

sum = a + b
my_integer_array = Array.new(sum, c)
```

`Array`s can also be used as inputs as follows:

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/array_complex.py
```

A `Tuple` has two fields, which can be any combination of a [Primitive Data Type](/nada-lang-types#primitive-data-types) or a [Compound Data Type](/nada-lang-types#compound-data-types-experimental-feature). For example a `Tuple` can be as simple as:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretInteger(Input(name="b", party=party1))
my_tuple = Tuple.new(a, b)
```

or more complicated like:

```python
a = PublicInteger(Input(name="a", party=party1))
b = SecretInteger(Input(name="b", party=party1))
c = PublicInteger(Input(name="c", party=party1))

my_tuple = Tuple.new(a, Tuple.new(b, c))
```

Lastly, `Array`s and `Tuple`s can be combined as:

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/tuple_new_unzip.py
```
