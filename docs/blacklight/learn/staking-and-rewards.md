# Staking & Rewards

Blacklight nodes are rewarded for the verification work they perform. Nodes are assigned verification work based on the amount of stake they have. Below we explain how staking and rewards for Blacklight nodes work.

## Staking

Staking (and unstaking are) defined by the [corresponding smart contract](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/StakingOperators.sol). 

In order to be assigned verification work by [Nillion's Ethereum L2](/blacklight/learn/network), Blacklight node operators must stake a minimum amount of NIL against their node. Currently this minimum is set to 70,000 NIL. For every HTX that is sent by a TEE operator to Nillion Blacklight, the L2 assigns a committee of Blacklight nodes to verify it. Assignment is based on stake: the more stake a Blacklight node has, the higher the chance of it being assigned work. You can read more about the [committee selection process](/blacklight/learn/verification#committee-selection).

## Rewards

Blacklight nodes will initially be rewarded from a reward pool equal to 0.5% inflation of the total NIL supply (1B tokens). See the [token emissions scheduling smart contract](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/EmissionsController.sol) for more details.


Once a Blacklight node is assigned a HTX to verify, it must verify it and report the outcome back to the L2. Once a consensus is reached by the assigned committee of nodes, rewards are distributed from the reward pool by the L2 and can be claimed by Blacklight nodes.

The greater a Blacklight nodes stake, the more work it will likely be assigned, the higher rewards it can earn. See the [budget reward allocator smart contract](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xb7223d0a84a8e0c5a5d384b57f2ba3b2cb216ed9) for more details.

### Example APY Calculations

APY is variable because rewards come from a fixed annual pool and depend on the total Blacklight stake. APY can approximately be calculated according to the formula **0.5% × (total NIL supply) / (total Blacklight stake)**. For example, the expected APY is ~33% if 15M NIL is staked and the expected APY is ~10% if 50M NIL is staked.
