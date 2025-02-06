export const NetworkConfig = {
  testnet: {
    cluster_id: {
      name: 'NILLION_CLUSTER_ID',
      value: 'N/A',
    },
    bootnode: {
      name: 'NILLION_BOOTNODE_MULTIADDRESS',
      value:
        'https://node-1.nilvm-testnet-1.nillion-network.testnet.nillion.network:14311',
    },
    websocket: {
      name: 'NILLION_BOOTNODE_WEBSOCKET',
      value: 'N/A',
    },
    chain_id: {
      name: 'NILLION_NILCHAIN_CHAIN_ID',
      value: 'nillion-chain-testnet-1',
    },
    nilchain_json_rpc: {
      name: 'NILLION_NILCHAIN_JSON_RPC',
      value: 'http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz',
    },
    nilchain_rest_api: {
      name: 'NILLION_NILCHAIN_REST_API',
      value: 'https://api.testnet.nilchain-rpc-proxy.nilogy.xyz',
    },
    nilchain_grpc: {
      name: 'NILLION_NILCHAIN_GRPC',
      value: 'https://testnet-nillion-grpc.lavenderfive.com',
    },
  },
};
