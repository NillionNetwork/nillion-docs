import React from 'react';
import { CodeSnippet } from './CodeSnippet';
import { NetworkConfig } from './network-info-090.js';

const generateEnvSnippet = (networkConfig, prefix = '') => {
  const lines = [];

  if (networkConfig) {
    for (const key in networkConfig) {
      const { name, value } = networkConfig[key];
      lines.push(`${prefix}${name}=${value}`);
    }
  }

  return lines.join('\n');
};

const pythonNetworkConfig = {
  ...NetworkConfig.testnet,
  private_key: {
    name: 'NILLION_NILCHAIN_PRIVATE_KEY_0',
    value: 'YOUR_TESTNET_FUNDED_PRIVATE_KEY',
  },
};
// not needed for python
delete pythonNetworkConfig.cluster_id;
delete pythonNetworkConfig.websocket;
delete pythonNetworkConfig.nilchain_json_rpc;
delete pythonNetworkConfig.nilchain_rest_api;

const jsNetworkConfig = {
  proxy: {
    name: 'API_BASE_PATH',
    value: '/nilchain-proxy',
  },
  ...NetworkConfig.testnet,
  private_key: {
    name: 'NILLION_NILCHAIN_PRIVATE_KEY',
    value: 'YOUR_TESTNET_FUNDED_PRIVATE_KEY',
  },
};
// not needed for js
delete jsNetworkConfig.cluster_id;
delete jsNetworkConfig.websocket;
delete jsNetworkConfig.bootnode;
delete jsNetworkConfig.nilchain_grpc;

export const PythonTestnetEnv = () => {
  return (
    <div>
      <CodeSnippet
        code={generateEnvSnippet(pythonNetworkConfig, '')}
        name="Python Testnet Configuration"
      />
    </div>
  );
};

export const ReactTestnetEnv = () => {
  return (
    <div>
      <CodeSnippet
        code={generateEnvSnippet(jsNetworkConfig, 'REACT_APP_')}
        name="ReactJs Testnet Configuration"
      />
    </div>
  );
};
