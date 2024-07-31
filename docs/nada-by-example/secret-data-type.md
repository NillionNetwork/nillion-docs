import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/multiplication_test.yaml
```
</TabItem>
</Tabs>

## SecretUnsignedInteger

`SecretUnsignedInteger` represents a user input secret unsigned integer value. This value can be zero or a positive integer.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition_unsigned.py
```
</TabItem>

<TabItem value="test" label="Test file">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_unsigned_test.yaml
```
</TabItem>
</Tabs>