import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

# Public

The Public data type is used for inputs that are not sensitive and can be shown in the clear during computation. These input values are visible to the program.

## PublicInteger

`PublicInteger` represents a user input public integer value. This value can be a negative integer, a positive integer, or zero.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition_public.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_public_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="addition_public"/>

## PublicUnsignedInteger

`PublicUnsignedInteger` represents a user input public unsigned integer value. This value can be zero or a positive integer.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition_public_unsigned.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_public_unsigned_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="addition_public_unsigned"/>

## PublicBoolean

`PublicBoolean` represents a user input public boolean value. This value can be true or false.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/public_conditional.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/public_conditional_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="public_conditional" />