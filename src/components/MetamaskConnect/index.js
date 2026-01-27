import styles from './styles.module.css';

export default function AddNetworkButton({ chainId, chainName, rpcUrl, symbol, explorer }) {
  const addNetwork = async () => {
    if (!window.ethereum) {
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    const chainIdHex = '0x' + parseInt(chainId).toString(16);

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: chainIdHex,
          chainName,
          nativeCurrency: { name: symbol, symbol, decimals: 18 },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: explorer ? [explorer] : []
        }]
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className={styles.connectButton} onClick={addNetwork}>
      Add {chainName}
    </button>
  );
}