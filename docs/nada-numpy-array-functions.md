
# Nada Array Functions
| Function        | Signature                                                  | Description                                                                 |
|-----------------|------------------------------------------------------------|-----------------------------------------------------------------------------|
| `array[i]`   | `item`                                                     | Retrieve an item from the array.                                            |
| `array[i] = ...`   | `key, value`                                               | Set an item in the array.                                                   |
| `add`           | `other: Any`                                               | Perform element-wise addition with broadcasting.                            |
| `sub`           | `other: Any`                                               | Perform element-wise subtraction with broadcasting.                         |
| `mul`           | `other: Any`                                               | Perform element-wise multiplication with broadcasting.                      |
| `divide`        | `other: Any`                                               | Perform element-wise division with broadcasting.                            |
| `matmul`        | `other: NadaArray`                                          | Perform matrix multiplication with another `NadaArray`.                     |
| `dot`           | `other: NadaArray`                                          | Compute the dot product between two `NadaArray` objects.                    |
| `hstack`        | `other: NadaArray`                                          | Horizontally stack two `NadaArray` objects.                                 |
| `vstack`        | `other: NadaArray`                                          | Vertically stack two `NadaArray` objects.                                   |
| `to_public`        |                                                            | Reveal the elements of the array.                                           |
| `apply`         | `func: Callable[[Any], Any]`                                | Apply a Python function element-wise to the array.                          |
| `mean`          | `axis=None, dtype=None, out=None`                           | Compute the mean along the specified axis.                                  |
| `output`        | `party: Party, prefix: str`                                 | Generate a list of Output objects for each element in the `NadaArray`.      |
| `array`         | `dims: Sequence[int], party: Party, prefix: str, nada_type: type` | Create a `NadaArray` with specified dimensions and element type.           |
| `random`        | `dims: Sequence[int], nada_type: type = SecretInteger`      | Create a random `NadaArray` with specified dimensions and element type.     |
| `len`       |                                                            | Get the length of the `NadaArray`.                                          |
| `empty`         |                                                            | Check if the `NadaArray` is empty.                                          |
| `dtype`         |                                                            | Get the data type of the `NadaArray`.                                       |
| `is_rational`   |                                                            | Check if the `NadaArray` contains rationals.                                |
| `is_integer`    |                                                            | Check if the `NadaArray` contains signed integers.                          |
| `is_unsigned_integer` |                                                 | Check if the `NadaArray` contains unsigned integers.                        |
| `is_boolean`    |                                                            | Check if the `NadaArray` contains booleans.                                 |
| `str(array)`       |                                                            | Get a string representation of the `NadaArray`.                             |
| `debug`         | `array: np.ndarray`                                         | Get a debug representation of the `NadaArray`.                              |