import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# nada-test: Nada Testing Framework

[nada-test](https://pypi.org/project/nada-test) is a powerful and flexible testing framework for Nada programs. It enables developers to write dynamic tests that are generated at runtime, offering more flexibility than traditional YAML test files.

#### Features

- Dynamic test generation at runtime
- Easy-to-write test functions using Python
- Seamless integration with `nada` projects
- Support for both standalone usage and integration with pytest
- Flexible input and output specification for test cases

## Installation

You can install [nada-test](https://pypi.org/project/nada-test) in a Nada project using pip:

```bash
pip install nada-test
```

## Setup

To use nada-test as your test framework, you’ll need to configure it in your nada-project.toml file. This allows the nada test command to automatically run your tests using the nada-test framework. Here’s how you can set it up:

<Tabs>
<TabItem value="basic" label="Basic configuration" default>
Add the following to your nada-project.toml file to set nada-test as your default test runner and point it to the ./tests directory:
```toml
[test_framework.nada-test]
command = "nada-test ./tests"
```

This setup ensures that all tests inside the ./tests directory will be executed when you run nada test.
</TabItem>

<TabItem value="custom" label="Custom test directories">
If you have tests in multiple directories, you can specify them in the configuration as well:

```toml
[test_framework.nada-test]
command = "nada-test ./custom_tests ./more_tests"
```

This allows you to organize your tests across different directories, and nada test will run all tests from the specified paths.
</TabItem>
</Tabs>


## Writing tests

You can use nada-test to write both functional and class-based tests for your programs. Tests are decorated with `@nada_test(program="program_name")` to specify which program is being tested. Below are two examples showing how to test a basic addition program.

Tests should be written in a Python file located in the directory you specified during the setup (e.g., ./tests or any custom test directory). Below are examples of how to test a basic addition program using both styles.

### Functional style test

<Tabs>
<TabItem value="test" label="nada-test file" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.py#L4-L11
```
</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>
</Tabs>

### Class-based test


<Tabs>
<TabItem value="test" label="nada-test file" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.py#L13-L21
```
</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>
</Tabs>


## Running tests

After writing your tests in the specified directories, you can run them using the following command:

```
nada test
```

This will execute all the tests configured in your nada-project.toml file. The output will show you the results of your test suite.