import React from 'react';

const TestProgram = ({ programName, testFileName }) => {
  const testFile = testFileName || `${programName}_test`;
  return (
    <>
      <h3>Run and test the {programName} program</h3>

      <h4>1. Open "Nada by Example"</h4>
      <a
        href="https://gitpod.io/#https://github.com/nillionnetwork/nada-by-example"
        target="_blank"
      >
        <img
          src="https://gitpod.io/button/open-in-gitpod.svg"
          alt="Open in Gitpod"
          style={{ border: 0 }}
        />
      </a>

      <h4>
        2. Run the program with <code>inputs</code> from the test file
      </h4>
      <pre>
        <code>nada run {testFile}</code>
      </pre>

      <h4>
        3. Test the program with <code>inputs</code> from the test file against
        the <code>expected_outputs</code> from the test file
      </h4>
      <pre>
        <code>nada test {testFile}</code>
      </pre>
    </>
  );
};

export default TestProgram;
