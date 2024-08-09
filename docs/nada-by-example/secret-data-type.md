import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

# Secret

The Secret data type is used for inputs that need to be kept confidential during computation. These input values are not visible to the program.

## SecretInteger

`SecretInteger` represents a user input secret integer value. This value can be a negative integer, a positive integer, or zero.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/multiplication.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/multiplication_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="multiplication" />

## SecretUnsignedInteger

`SecretUnsignedInteger` represents a user input secret unsigned integer value. This value can be zero or a positive integer.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition_unsigned.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_unsigned_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="addition_unsigned" />

## SecretBoolean

`SecretBoolean` represents a user input secret boolean value. This value can be true or false.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/secret_conditional.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/secret_conditional_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="secret_conditional" />