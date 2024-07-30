import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debugging

If you come from a Python background, you might be used to using print statements to debug your code. Today, Nada programs do not support print statements, and compilation will fail if any are included. The best way to debug a Nada program is to raise a Python exception. Check out other [best practices and Nada debugging techniques, documented here](/nada-debugging).

## Debugging by raising exceptions

<Tabs>

<TabItem value="program" label="Nada program" default>

Uncomment any one of the raise Exception() lines, then re-build this program with `nada build debug` to print the inside of the exception to the terminal

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/debug.py
```
</TabItem>

<TabItem value="test" label="Test file">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/debug_test.yaml
```
</TabItem>
</Tabs>

### Type exception

This exception prints the data type of `sum` to your terminal. When debugging with `type()`, double check that your Nada operation supports the type raised in the exception by looking at the [Nada Operations](/nada-by-example/nada-operations) Supported Types column.

```
raise Exception(type(sum))
```

```
nada run debug_test
Running program 'debug' with inputs from test file debug_test
Building ...
Error:
   0: Traceback (most recent call last):
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/compile.py", line 97, in <module>
          output = compile(sys.argv[1])
                   ^^^^^^^^^^^^^^^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/timer.py", line 116, in wrapper
          value = func(*args, **kwargs)
                  ^^^^^^^^^^^^^^^^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/compile.py", line 48, in compile
          outputs = main()
                    ^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/src/debug.py", line 15, in nada_main
          raise Exception(type(sum))
      Exception: <class 'nada_dsl.nada_types.types.SecretInteger'>
   0:

Location:
   tools/nada/src/build.rs:15
```

### Operation exception

This exception prints the operation type of `sum` to your terminal. When debugging with operation types, check that the Nada operation type and syntax are correct by looking at the [Nada Operations](/nada-by-example/nada-operations) Syntax and Supported Types columns.


```
raise Exception(sum)
```

```
nada run debug_test
Running program 'debug' with inputs from test file debug_test
Building ...
Error:
   0: Traceback (most recent call last):
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/compile.py", line 97, in <module>
          output = compile(sys.argv[1])
                   ^^^^^^^^^^^^^^^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/timer.py", line 116, in wrapper
          value = func(*args, **kwargs)
                  ^^^^^^^^^^^^^^^^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/.venv/lib/python3.12/site-packages/nada_dsl/compile.py", line 48, in compile
          outputs = main()
                    ^^^^^^
        File "/Users/steph/Desktop/nillion/nada-by-example/src/debug.py", line 16, in nada_main
          raise Exception(sum)
      Exception: SecretInteger(inner=<nada_dsl.operations.Addition object at 0x102f26fc0>)
   0:

Location:
   tools/nada/src/build.rs:15
```

## Next steps

🐛 Now that you've learned to debug, you're ready play with Nada programs. Move on to the next section where you will set up a local environment and run and test Nada programs locally following the [Nada by Example Local Setup Quickstart](/nada-by-example-quickstart).