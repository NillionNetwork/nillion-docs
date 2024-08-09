# Linear Scan

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

The linear scan example scans a list of secret values from multiple parties, checking for the existence of specific values. The example uses a reusable helper function for the logic for determining whether a given value is present or isn't present in the list.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/list_scan_linear.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/list_scan_linear_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="list_scan_linear"/>