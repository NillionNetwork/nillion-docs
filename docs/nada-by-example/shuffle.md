# Shuffle

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';


## Simple Shuffle

This example uses the [nada-numpy](/nada-numpy-introduction) shuffle implementation to shuffle an array of four secret integers and return the shuffled values. This process preserves the original elements but places them in a different order.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/shuffle_simple.py
```
</TabItem>

<TabItem value="test" label="Test">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/shuffle_simple_test.yaml
```
</TabItem>
<TabItem value="nada_test" label="nada-test">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/shuffle_simple_test.py
```
</TabItem>
</Tabs>

<TestProgram programName="shuffle_simple" testFileName="shuffle_simple_test"/>

## More Shuffle Examples

This example demonstrates how the [nada-numpy](/nada-numpy-introduction) shuffling operation supports multiple data types, including Rational, SecretRational, PublicInteger, and SecretInteger. Shuffling can be applied using two approaches: the `shuffle()` function or the built-in `.shuffle()` method on arrays.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/shuffle.py
```
</TabItem>

<TabItem value="test" label="Test">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/shuffle_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="shuffle" testFileName="shuffle_test"/>