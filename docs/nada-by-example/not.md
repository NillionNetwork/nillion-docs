# Not

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

The NOT operator, represented by the tilde symbol (~), is used in the Nada DSL to invert or negate a boolean value. When applied to a boolean expression, the ~ operator flips its value—turning True to False and False to True.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/not.py
```
</TabItem>

<TabItem value="tie" label="Test 1">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/not_test_1.yaml
```
</TabItem>
<TabItem value="rock" label="Test 2">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/not_test_2.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="not" testFileName="not_test_1"/>