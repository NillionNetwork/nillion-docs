import NadaDataTypesTable from './\_data-types-table.mdx';

# Data Types

Overview of the primitive and the compound Nada data types.

## Primitive Data Types

<NadaDataTypesTable/>

`Secret` and `Public` data types can be used to specify user inputs as:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretUnsignedInteger(Input(name="b", party=party2))
c = PublicInteger(Input(name="c", party=party1))
d = PublicUnsignedInteger(Input(name="d", party=party2))
e = SecretBoolean(Input(name="e", party=party1))
f = PublicBoolean(Input(name="f", party=party2))
```

Similarly, `Literals` can only be used within a program as:

```python
a = SecretInteger(Input(name="a", party=party1))
b = SecretUnsignedInteger(Input(name="b", party=party2))
c = SecretBoolean(Input(name="c", party=party1))
new_int = a + Integer(13)
new_uint = b + UnsignedInteger(13)
new_bool = Boolean(True)
```
