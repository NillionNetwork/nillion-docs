# Rewards

Blacklight nodes are rewarded for the verification work they perform. Below we explain how rewards for Blacklight nodes are determined.

## Annual Reward Pool

Blacklight nodes will initially be rewarded from a reward pool equal to 0.5% inflation of the total NIL supply (1B tokens).

[NOTE TO STEPH - note sure what you want to point out with the link below, but left it in for now]
- [EmissionsController](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/EmissionsController.sol) - Token emissions scheduler with L1-to-L2 bridging

## How Rewards Work (Staking and rewards)

In order to be assigned verification work by Nillion’s L2, Blacklight nodes must stake a minimum amount of NIL against their node. Currently this is set to 70,000 NIL. For every HTX that is sent by a TEE operator to Nillion Blacklight, Nillion’s L2 assigns a committee of Blacklight nodes to verify it. Assignment is based on stake: the more stake a Blacklight node has, the higher the chance of it being assigned work.

Once a Blacklight node is assigned a HTX to verify, it must verify it and report the outcome back to Nillion’s L2. Once a consensus is reached by the assigned committee of nodes, rewards are distributed from the reward pool by Nillion’s L2 and can be claimed by Blacklight nodes.

Therefore, the greater a Blacklight nodes stake, the more work it will likely be assigned, the higher rewards it can earn.

[NOTE TO STEPH - note sure what you want to point out with the link below, but left it in for now]

- [RewardPolicy](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xb7223d0a84a8e0c5a5d384b57f2ba3b2cb216ed9) - Streaming budget reward allocator with stake-weighted distribution


## Example APY Calculations

APY is variable because rewards come from a fixed annual pool and depend on total Blacklight stake. APY can approximately be calculated as follows:

APY ≈ (0.5% × total NIL supply) / total Blacklight stake

Therefore, if 15M NIL staked, the expected APY is ~33%. If 50M NIL is staked, the expected APY is ~10%.

