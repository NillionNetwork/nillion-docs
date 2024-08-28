---
displayed_sidebar: nadaByExampleSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PythonVersionInfo from './\_python-version-info.mdx';
import IframeVideo from '@site/src/components/IframeVideo/index';

# How to Run Nada by Example

## Setup options

All examples for "Nada by Example" live in the [nada-by-example](https://github.com/NillionNetwork/nada-by-example) Github repo. Nada programs are in [`nada-by-example/src/`](https://github.com/NillionNetwork/nada-by-example/tree/main/src) and tests are in [`nada-by-example/tests`](https://github.com/NillionNetwork/nada-by-example/tree/main/tests). To run examples, there are 2 setup options:

1.  _Recommended_ - 1 Click Gitpod Setup
2.  Local Machine Setup

<Tabs>

<TabItem value="gitpod" label="1 Click Gitpod Setup" default>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nillionnetwork/nada-by-example)

Click the button above to open the Nada by Example repo in Gitpod. Then follow the [run and test an example](/nada-by-example-quickstart#how-to-run-and-test-an-example-program) section to learn how to run and test a Nada program.

<IframeVideo videoSrc="https://www.loom.com/embed/4395eeed66934142ba0feaf68a43534a?sid=785f1cc2-881a-4c30-8d96-07007251bd6b"/>

</TabItem>

<TabItem value="local" label="Local Machine Setup">
Complete local repo setup following the instructions below to run an example from the repo locally.

Install Nillion, clone the nada-by-example repo, and set up a developer environment for your local nada-by-example repo.

#### 1. Install Nillion globally

Check to see if you have `nilup`, the Nillion installer installed

```
nilup -V
```

If you don't have nilup, install nilup

```
curl https://nilup.nilogy.xyz/install.sh | bash
```

#### 2. Use the latest version of the Nillion SDK

Install and use the `latest` version of the Nillion SDK and tools.

```
nilup install latest
nilup use latest
```

#### 3. Optionally enable nilup telemetry, providing your Ethereum wallet address

```
nilup instrumentation enable --wallet <your-eth-wallet-address>
```

#### 4. Clone the nada-by-example repo

Star [nada-by-example](https://github.com/NillionNetwork/nada-by-example) on Github so you have it for future reference. Then clone the repo

```
git clone https://github.com/NillionNetwork/nada-by-example.git
```

#### 5. Create a Python virtual environment and install Nada in nada-by-example

<PythonVersionInfo/>

```
cd nada-by-example
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

#### 6. Build (compile) all Nada programs in the repo

```
nada build
```

`nada build` is a [nada tool command](/nada#build-compile-a-program) that compiles programs to create one compiled binary (.nada.bin) file per program listed in the [nada-project.toml file](https://github.com/NillionNetwork/nada-by-example/blob/main/nada-project.toml) in the target/ directory.

✅ Great work! Now that you've set up the nada-by-example repo, you can run any example.
</TabItem>
</Tabs>

## How to run and test an example program

:::tip

The [nada-by-example](https://github.com/NillionNetwork/nada-by-example) repo is a Nada project created with Nillion's [nada](/nada) tool. You can run all existing `nada` commands found in the [nada tool docs](/nada) to compile programs, get program requirements, run a program, and test a program.
:::

Every Nada program example has a corresponding test file. Programs are in [`nada-by-example/src/`](https://github.com/NillionNetwork/nada-by-example/tree/main/src) and test files are in [`nada-by-example/tests`](https://github.com/NillionNetwork/nada-by-example/tree/main/tests). Running a program uses the inputs specified in the test file. Testing a program uses the inputs specified in the test file and also checks the outputs against the `expected_outputs` specified in the test file.

Run any program with the inputs specified in the test file with [`nada run`](/nada#run-a-program)

```
nada run <test-file-name>
```

Test any program with the inputs and outputs specified in the test file with [`nada test`](/nada#test-a-program)

```
nada test <test-file-name>
```

### Run the addition example

Here is the Nada program and test file for the addition example. The program is [src/addition.py](https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py) and the test file is [tests/addition_test.yaml](https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml)

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```
</TabItem>
</Tabs>

Run the addition program with `addition_test` test inputs:

```
nada run addition_test
```

The result of running this program is

```
(.venv) ➜  nada-by-example git:(main) nada run addition_test
Running program 'addition' with inputs from test file addition_test
Building ...
Running ...
Program ran!
Outputs: {
    "sum": SecretInteger(
        NadaInt(
            40,
        ),
    ),
}
```

### Test the addition example

Here is the Nada program and test file for the addition example. The program is [src/addition.py](https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py) and the test file is [tests/addition_test.yaml](https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml)

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```
</TabItem>
</Tabs>

Test the addition program with `addition_test` test inputs and expected outputs:

```
nada test addition_test
```

The result of testing this program is

```
(.venv) ➜  nada-by-example git:(main) nada test addition_test
Running test: addition_test
Building ...
Running ...
addition_test: PASS
```

Testing the addition program with `addition_test` results in a PASS because the expected_outputs `sum` output matches the run result.

### Add a new test for the addition example

Use the [nada tool](/nada#generate-a-test-file) to add a new test file named "addition_test_2" for the addition example.

```
nada generate-test --test-name addition_test_2 addition
```

This results in a new test file: `/tests/addition_test_2.yaml`

```
(.venv) ➜  nada-by-example git:(main) nada generate-test --test-name addition_test_2 addition
Generating test 'addition_test_2' for
Building ...
Generating test file ...
Test generated!
```

Update the values in the test file to anything you want, for example:

```yaml
---
program: addition
inputs:
  num_1:
    SecretInteger: '100'
  num_2:
    SecretInteger: '10'
expected_outputs:
  sum:
    SecretInteger: '110'
```

#### Run addition with your new test

```
nada run addition_test_2
```

#### Test addition with your new test

```
nada test addition_test_2
```

## Keep exploring examples

🥳 You're all set up to run and test any example in [nada-by-example](https://github.com/NillionNetwork/nada-by-example). Keep exploring what's possible with Nada by running the rest of the programs in the repo.
