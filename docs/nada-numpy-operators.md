# Nada Array Operators

## Arithmetic Operators
| Operator    | Example                                | Operation                                      |
|-------------|----------------------------------------|------------------------------------------------|
| `+`         | `array1 + array2`                      | Element-wise addition with broadcasting.        |
| `-`         | `array1 - array2`                      | Element-wise subtraction with broadcasting.     |
| `*`         | `array1 * array2`                      | Element-wise multiplication with broadcasting.  |
| `/`         | `array1 / array2`                      | Element-wise division with broadcasting.        |
| `@`         | `array1 @ array2`                      | Matrix multiplication with another `NadaArray`. |
| `+=`        | `array1 += array2`                     | Inplace element-wise addition with broadcasting. |
| `-=`        | `array1 -= array2`                     | Inplace element-wise subtraction with broadcasting. |
| `*=`        | `array1 *= array2`                     | Inplace element-wise multiplication with broadcasting. |
| `/=`        | `array1 /= array2`                     | Inplace element-wise division with broadcasting. |
| `@=`        | `array1 @= array2`                     | Inplace matrix multiplication with another `NadaArray`. |

## Logical Operators
| Operator    | Example                                | Operation                                      |
|-------------|----------------------------------------|------------------------------------------------|
| `==`        | `array1 == array2`                     | Element-wise equality comparison.               |
| `<`         | `array1 < array2`                      | Element-wise less than comparison.              |
| `<=`        | `array1 <= array2`                     | Element-wise less than or equal to comparison.  |
| `>`         | `array1 > array2`                      | Element-wise greater than comparison.           |
| `>=`        | `array1 >= array2`                     | Element-wise greater than or equal to comparison.|
| `-array`    | `-array1`                              | Element-wise negation.                         |
| `array ** n`| `array1 ** n`                          | Element-wise exponentiation.                   |

## Other Operators
| Operator    | Example                                | Operation                                      |
|-------------|----------------------------------------|------------------------------------------------|
| `compress`   | `array.compress(condition)`                  | Compress elements based on condition.               |
| `copy`       | `array.copy()`                               | Create a copy of the array.                         |
| `cumprod`    | `array.cumprod()`                            | Cumulative product of elements.                     |
| `cumsum`     | `array.cumsum()`                             | Cumulative sum of elements.                         |
| `diagonal`   | `array.diagonal(offset=1)`                   | Retrieve diagonal elements.                         |
| `fill`       | `array.fill(value)`                          | Fill array with a scalar value.                     |
| `flatten`    | `array.flatten()`                            | Flatten array into a 1D array.                      |
| `item`       | `array.item(index)`                          | Get item at specified index.                        |
| `itemset`    | `array.itemset(index, value)`                 | Set item at specified index to value.               |
| `prod`       | `array.prod()`                               | Product of all elements.                            |
| `put`        | `array.put(indices, values)`                  | Put values into specified indices.                  |
| `ravel`      | `array.ravel()`                              | Flatten array into a 1D array.                      |
| `reshape`    | `array.reshape(shape)`                       | Reshape array to specified shape.                   |
| `resize`     | `array.resize(new_shape)`                    | Resize array to new shape.                          |
| `squeeze`    | `array.squeeze()`                            | Remove single-dimensional entries from shape.       |
| `sum`        | `array.sum()`                                | Sum of all elements.                                |
| `swapaxes`   | `array.swapaxes(axis1, axis2)`               | Swap two axes of the array.                         |
| `take`       | `array.take(indices)`                        | Take elements from array at specified indices.      |
| `tolist`     | `array.tolist()`                             | Convert array to a Python list.                     |
| `trace`      | `array.trace(offset=0)`                      | Compute the trace of the array.                     |
| `transpose`  | `array.transpose()`                          | Transpose array dimensions.                         |
| `base`       | `array.base`                                 | Base object of the array.                           |
| `data`       | `array.data`                                 | Data pointer to the array's memory.                 |
| `flags`      | `array.flags`                                | Information about the memory layout of the array.   |
| `flat`       | `array.flat`                                 | 1D iterator over the array.                         |
| `itemsize`   | `array.itemsize`                             | Size of a single element in bytes.                  |
| `nbytes`     | `array.nbytes`                               | Total bytes consumed by the array's elements.       |
| `ndim`       | `array.ndim`                                 | Number of array dimensions.                         |
| `shape`      | `array.shape`                                | Shape of the array.                                |
| `size`       | `array.size`                                 | Number of elements in the array.                    |
| `strides`    | `array.strides`                              | Strides of the array.                              |
| `T`          | `array.T`                                    | Transposed view of the array.                       |


For more examples, please visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-algebra/tree/main/examples).