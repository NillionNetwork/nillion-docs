export const NetworkConfig = {
  testnet: {
    cluster_id: {
      name: 'NILLION_CLUSTER_ID',
      value: 'b13880d3-dde8-4a75-a171-8a1a9d985e6c',
    },
    bootnode: {
      name: 'NILLION_BOOTNODE_MULTIADDRESS',
      value:
        '/dns/node-1.testnet-photon.nillion-network.nilogy.xyz/tcp/14111/p2p/12D3KooWCfFYAb77NCjEk711e9BVe2E6mrasPZTtAjJAPtVAdbye',
    },
    websocket: {
      name: 'NILLION_BOOTNODE_WEBSOCKET',
      value:
        '/dns/node-1.testnet-photon.nillion-network.nilogy.xyz/tcp/14211/wss/p2p/12D3KooWCfFYAb77NCjEk711e9BVe2E6mrasPZTtAjJAPtVAdbye',
    },
    chain_id: {
      name: 'NILLION_NILCHAIN_CHAIN_ID',
      value: 'nillion-chain-testnet-1',
    },
    nilchain_json_rpc: {
      name: 'NILLION_NILCHAIN_JSON_RPC',
      value: 'http://65.109.222.111:26657',
    },
    nilchain_rest_api: {
      name: 'NILLION_NILCHAIN_REST_API',
      value: 'https://testnet-nillion-api.lavenderfive.com',
    },
    nilchain_grpc: {
      name: 'NILLION_NILCHAIN_GRPC',
      value: 'https://testnet-nillion-grpc.lavenderfive.com',
    },
  },
};
