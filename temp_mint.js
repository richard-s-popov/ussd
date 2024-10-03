const contractABI = [{"inputs":[{"internalType":"contract ERC20","name":"_USSD","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"accumulated","type":"uint256"}],"name":"RewardsPerTokenUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"start","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"end","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"RewardsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"userRewards","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidRewardPerToken","type":"uint256"}],"name":"UserRewardsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RescueTransferTimelockSet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"USSDToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accumulatedRewards","outputs":[{"internalType":"uint128","name":"accumulated","type":"uint128"},{"internalType":"uint128","name":"checkpoint","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRewardsPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"currentUserRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_USSDAmount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyTransferExecute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"_USSDAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInterval","outputs":[{"internalType":"uint32","name":"start","type":"uint32"},{"internalType":"uint32","name":"end","type":"uint32"},{"internalType":"uint96","name":"rate","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPerToken","outputs":[{"internalType":"uint128","name":"accumulated","type":"uint128"},{"internalType":"uint32","name":"lastUpdated","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"uint256","name":"totalRewards","type":"uint256"}],"name":"setRewardsInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakedAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0x0E8125Ffd845941EB5DB0B698B9C966C65623E80';
const contractABI_USSD = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountUSSD","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountUSSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountValuation","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STABLE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STABLEDAI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBGL","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBTC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"calculateMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_valuation","type":"uint256"}],"name":"calculateRedeem","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"valuation","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateralFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_insurance","type":"address"}],"name":"connectInsurance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staking","type":"address"}],"name":"connectStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"insuranceContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"mintForToken","outputs":[{"internalType":"uint256","name":"stableCoinAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"stableCoinAmount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"mintRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"prevSupplyAndCF","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stableOracle","type":"address"},{"internalType":"address","name":"_DAIOracle","type":"address"},{"internalType":"address","name":"_WBGLOracle","type":"address"},{"internalType":"address","name":"_WBTCOracle","type":"address"},{"internalType":"address","name":"_WETHOracle","type":"address"}],"name":"setOracles","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"switchToDAI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"switchToWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"switchedToDAI","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"switchedToWETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}] ;
const contractAddressUSSD = '0x33C88D4caC6aC34F77020915a2a88cd0417dC069';
const contractABI_USDT = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"BlockReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_blockedUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"DestroyedBlockedFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"NewPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"RemovedPrivilegedContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"addPrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addToBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blockedUser","type":"address"}],"name":"destroyBlockedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_l2Gateway","type":"address"},{"internalType":"address","name":"_l1Counterpart","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTrusted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeFromBlockedList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_trustedDeFiContract","type":"address"}],"name":"removePrivilegedContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddressUSDT = '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9';
const contractABI_WBTC = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_l1Address","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"bridgeInit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isMaster","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const contractAddressWBTC = '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f';
const contractABI_WETH = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bridgeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_l2Gateway","type":"address"},{"internalType":"address","name":"_l1Address","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"l1Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"l2Gateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const contractAddressWETH = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';

// Адреса оракулов
const usdtOracleAddress = '0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7';
const wbtcOracleAddress = '0xd0C7101eACbB49F3deCcCc166d238410D6D46d57';
const wethOracleAddress = '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612';
let usdtOracle;
let wbtcOracle;
let wethOracle;
const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"}];

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3 = window.Web3;
let contract;
let contractUSSD;
let contractUSDT;
let contractWBTC;
let contractWETH;
let accounts;
let web3;
let chainlinkPlugin;
let targetToken;
const mintValueInput = document.getElementById("user-mint-value");
mintValueInput.disabled = false;
mintValueInput.value = "Please connect wallet";

// Replace built-in alert function with customAlert
window.alert = customAlert;   

// Define the web3 variable here
// Initialize Web3Modal
const web3Modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions: {
    metamask: {
      // MetaMask provider does not need any configuration
      package: window.ethereum
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "43bdb2688a0842a097931ccb23613984" // Replace with your Infura Project ID
      }
    }
  }
});


// Function to update wallet address in the HTML
function updateWalletAddress(address) {
  const maskedAddress = address ? address.slice(0, 4) + "..." + address.slice(-4) : "No wallet connected";
  document.getElementById("wallet-address").textContent = maskedAddress;
}

// Connect function for both MetaMask and WalletConnect
async function connect() {
  try {
    const provider = await web3Modal.connect();
    web3 = new Web3(provider);
    //web3 = new Web3(new Web3.providers.HttpProvider('https://arbitrum-mainnet.infura.io/v3/43bdb2688a0842a097931ccb23613984'));// Initialize web3 here
    console.log("Successfully connected using:", provider.constructor.name);

    // Check the network ID
    const networkId = await web3.eth.net.getId();
    if (networkId == 42161) {
		// Get the user's wallet address
	    accounts = await web3.eth.getAccounts();
	    const walletAddress = accounts[0];
	    updateWalletAddress(walletAddress);
	    
	    
	    // Initialize the contract with the same provider
	    contract = new web3.eth.Contract(contractABI, contractAddress);

	    // Initialize the contract with the same provider
	    contractUSSD = new web3.eth.Contract(contractABI_USSD, contractAddressUSSD);
	    contractUSDT = new web3.eth.Contract(contractABI_USDT, contractAddressUSDT);
	    contractWBTC = new web3.eth.Contract(contractABI_WBTC, contractAddressWBTC);
	    contractWETH = new web3.eth.Contract(contractABI_WETH, contractAddressWETH);

        // Создание экземпляров контрактов оракулов
        usdtOracle = new web3.eth.Contract(aggregatorV3InterfaceABI, usdtOracleAddress);
        wbtcOracle = new web3.eth.Contract(aggregatorV3InterfaceABI, wbtcOracleAddress);
        wethOracle = new web3.eth.Contract(aggregatorV3InterfaceABI, wethOracleAddress);
	    
	    // Change button text to "Disconnect Wallet"
	    const btnConnectWallet = document.getElementById("btn-connect-wallet");
	    btnConnectWallet.textContent = "Disconnect Wallet";
	    btnConnectWallet.removeEventListener("click", connect);
	    btnConnectWallet.addEventListener("click", disconnect);

        // Enable value inputs
	    mintValueInput.disabled = false;
        mintValueInput.value = "";
	    
	      // Enable buttons
	    toggleButtons(true);
	    await getWalletTokenBalances();
	} else {
		document.getElementById("wallet-address").textContent = 'Please change network to Arbitrum';
	}    
  } catch (e) {
    console.error("Error connecting to wallet:", e.message);
  }
}

// Disconnect function
async function disconnect() {
  try {
    await web3Modal.clearCachedProvider();
    web3 = null;
    contract = null;
    accounts = null;
    console.log("Wallet disconnected.");
    
    // Change button text back to "Connect Wallet"
    const btnConnectWallet = document.getElementById("btn-connect-wallet");
    btnConnectWallet.textContent = "Connect Wallet";
    btnConnectWallet.removeEventListener("click", disconnect);
    btnConnectWallet.addEventListener("click", connect);
    
    // Clear wallet address display
    updateWalletAddress("");

    // Disable stake value input
    mintValueInput.value = "Please connect wallet";

    // Disable buttons
    toggleButtons(false);
  } catch (e) {
    console.error("Error disconnecting wallet:", e.message);
  }
}

async function getWalletTokenBalances() {
  if (!web3 || !accounts || !contractUSSD || !contractUSDT || !contractWBTC || !contractWETH) {
    console.error("Web3, accounts, or contract2 are not initialized. Please connect your wallet first.");
    return;
  }

  const ussdBalanceElement = document.getElementById("ussd-balance");
  const usdtBalanceElement = document.getElementById("usdt-balance");
  const wbtcBalanceElement = document.getElementById("wbtc-balance");
  const wethBalanceElement = document.getElementById("weth-balance");



  ussdBalanceElement.textContent = "Updating...";
  usdtBalanceElement.textContent = "Updating...";
  wbtcBalanceElement.textContent = "Updating...";
  wethBalanceElement.textContent = "Updating...";

  ussdBalanceElement.classList.add('updating');
  usdtBalanceElement.classList.add('updating');
  wbtcBalanceElement.classList.add('updating');
  wethBalanceElement.classList.add('updating');

  const userAddress = accounts[0]; // Адрес подключенного пользователя
  try {
    // Получаем баланс USSD токенов для пользователя
    let balanceRaw = await contractUSSD.methods.balanceOf(userAddress).call();
    let decimalsUSSD = await contractUSSD.methods.decimals().call();
    let balanceUSSD = balanceRaw / Math.pow(10, decimalsUSSD);
    
    // Получаем баланс USDT токенов для пользователя
    balanceRaw = await contractUSDT.methods.balanceOf(userAddress).call();
    let decimalsUSDT = await contractUSDT.methods.decimals().call();
    let balanceUSDT = balanceRaw / Math.pow(10, decimalsUSDT);
    
    // Получаем баланс WBTC токенов для пользователя
    balanceRaw = await contractWBTC.methods.balanceOf(userAddress).call();
    let decimalsWBTC = await contractWBTC.methods.decimals().call();
    let balanceWBTC = balanceRaw / Math.pow(10, decimalsWBTC);
    
    // Получаем баланс WETH токенов для пользователя
    balanceRaw = await contractWETH.methods.balanceOf(userAddress).call();
    let decimalsWETH = await contractWETH.methods.decimals().call();
    let balanceWETH = balanceRaw / Math.pow(10, decimalsWETH);

    const usdtPrice = await usdtOracle.methods.latestRoundData().call();
    const wbtcPrice = await wbtcOracle.methods.latestRoundData().call();
    const wethPrice = await wethOracle.methods.latestRoundData().call();
    const decimalsOracleUSDT = await usdtOracle.methods.decimals().call();
    const decimalsOracleWBTC = await wbtcOracle.methods.decimals().call();
    const decimalsOracleWETH = await wethOracle.methods.decimals().call();

    const usdtUsdBalance = (usdtPrice.answer / Math.pow(10, decimalsOracleUSDT)) * balanceUSDT;
    const wbtcUsdBalance = (wbtcPrice.answer / Math.pow(10, decimalsOracleWBTC)) * balanceWBTC;
    const wethUsdBalance = (wethPrice.answer / Math.pow(10, decimalsOracleWETH)) * balanceWETH;

    ussdBalanceElement.classList.remove('updating');
    usdtBalanceElement.classList.remove('updating');
    wbtcBalanceElement.classList.remove('updating');
    wethBalanceElement.classList.remove('updating');

    ussdBalanceElement.textContent = balanceUSSD.toFixed(decimalsUSSD);
    usdtBalanceElement.textContent = balanceUSDT.toFixed(decimalsUSDT);
    wbtcBalanceElement.textContent = balanceWBTC.toFixed(decimalsWBTC);
    wethBalanceElement.textContent = balanceWETH.toFixed(decimalsWETH);

    document.getElementById('mint-redeem-balance-usd-ussd').textContent = `1 USSD = 1 USD`;
    document.getElementById('mint-redeem-balance-usd-usdt').textContent = `$${usdtUsdBalance.toFixed(2)}`;
    document.getElementById('mint-redeem-balance-usd-wbtc').textContent = `$${wbtcUsdBalance.toFixed(2)}`;
    document.getElementById('mint-redeem-balance-usd-weth').textContent = `$${wethUsdBalance.toFixed(2)}`;
  } catch (error) {
    console.error("Ошибка при получении баланса:", error.message);
  }
}

// Function to toggle button states based on wallet connection
function toggleButtons(enabled) {
  const buttons = ["btnMint"];
  buttons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.disabled = !enabled;
      if (!enabled) {
        button.classList.add("disabled-button"); // Add disabled class
          button.classList.remove('btn-selected');
         document.getElementById("ussd-balance").textContent = "Please connect wallet";
         document.getElementById("usdt-balance").textContent = "Please connect wallet";
         document.getElementById("wbtc-balance").textContent = "Please connect wallet";
         document.getElementById("weth-balance").textContent = "Please connect wallet";
      } else {
        button.classList.remove("disabled-button"); // Remove disabled class
         document.getElementById("ussd-balance").textContent = "0";
         document.getElementById("usdt-balance").textContent = "0";
         document.getElementById("wbtc-balance").textContent = "0";
         document.getElementById("weth-balance").textContent = "0";
         
      }
    }
  });
}

function selectorUSDT() {
    let button = document.getElementById('btnUSDTSelector');
    if (button.classList.contains('disabled-button')) {
        return;
    }

    document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
    document.getElementById('btnWETHSelector').classList.remove('btn-selected');
    button.classList.add('btn-selected');

    targetToken = 'USDT';

    const inputValue = document.getElementById('user-mint-value').value.replace(',', '.');
    calculateUSSD(inputValue);
}

function selectorWBTC() {
    let button = document.getElementById('btnWBTCSelector');
    if (button.classList.contains('disabled-button')) {
        return;
    }

    document.getElementById('btnUSDTSelector').classList.remove('btn-selected');
    document.getElementById('btnWETHSelector').classList.remove('btn-selected');
    button.classList.add('btn-selected');

    targetToken = 'WBTC';

    const inputValue = document.getElementById('user-mint-value').value.replace(',', '.');
    calculateUSSD(inputValue);
}

function selectorWETH() {
    let button = document.getElementById('btnWETHSelector');
    if (button.classList.contains('disabled-button')) {
        return;
    }

    document.getElementById('btnUSDTSelector').classList.remove('btn-selected');
    document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
    button.classList.add('btn-selected');

    targetToken = 'WETH';

    const inputValue = document.getElementById('user-mint-value').value.replace(',', '.');
    calculateUSSD(inputValue);
}

async function updateTargetTokenButtons() {
    const web4 = new Web3(new Web3.providers.HttpProvider('https://arb1.arbitrum.io/rpc'));
    const tempUSSDContract = new web4.eth.Contract(contractABI_USSD, contractAddressUSSD);
    const tempUSDTContract = new web4.eth.Contract(contractABI_USDT, contractAddressUSDT);

	const latestBlock = await web4.eth.getBlock('latest');
	const timestamp = latestBlock.timestamp;

	const cycle = (822721 + Math.floor((timestamp - 1703420845) / 600)) % 210000;

	if (cycle >= 52500 && cycle <= 105000) {
	    document.getElementById('mintingHintValue').textContent = "Today you can mint USSD for USDT";
        document.getElementById('mintingHint').style.display = 'block';
	    document.getElementById('btnUSDTSelector').classList.add('btn-selected');
		document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
		document.getElementById('btnWETHSelector').classList.remove('btn-selected');
        targetToken = 'USDT';
	} else {
	    // Получение количества десятичных знаков для USDT и USSD
		const usdtDecimals = await tempUSDTContract.methods.decimals().call();
		const ussdDecimals = await tempUSSDContract.methods.decimals().call();

		// Получение баланса USDT на контракте USSD
		const usdtBalanceRaw = await tempUSDTContract.methods.balanceOf(contractAddressUSSD).call();
		// Преобразование с учетом десятичных знаков
		const usdtBalance = usdtBalanceRaw / Math.pow(10, usdtDecimals);

		// Получение общего объема эмиссии USSD
		const totalSupplyRaw = await tempUSSDContract.methods.totalSupply().call();
		// Преобразование с учетом десятичных знаков
		const totalSupply = totalSupplyRaw / Math.pow(10, usdtDecimals);

		// Применение логики на основе преобразованных значений
		if (usdtBalance <= totalSupply * 0.05) {
			document.getElementById('mintingHintValue').textContent = "Today you can mint USSD for USDT";
            document.getElementById('mintingHint').style.display = 'block';
            document.getElementById('btnUSDTSelector').classList.add('btn-selected');
            document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
            document.getElementById('btnWETHSelector').classList.remove('btn-selected');

            document.getElementById('btnUSDTSelector').classList.remove('disabled-button');
            document.getElementById('btnWBTCSelector').classList.add('disabled-button');
            document.getElementById('btnWETHSelector').classList.add('disabled-button');

            targetToken = 'USDT';
		} else if (totalSupply * 0.15 >= usdtBalance && usdtBalance > totalSupply * 0.05) {
			document.getElementById('mintingHintValue').textContent = "Today you can mint USSD for USDT/WETH/WBTC";
            document.getElementById('mintingHint').style.display = 'block';
            document.getElementById('btnUSDTSelector').classList.add('btn-selected');
            document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
            document.getElementById('btnWETHSelector').classList.remove('btn-selected');

            document.getElementById('btnUSDTSelector').classList.remove('disabled-button');
            document.getElementById('btnWBTCSelector').classList.remove('disabled-button');
            document.getElementById('btnWETHSelector').classList.remove('disabled-button');

            targetToken = 'USDT';
		} else if (usdtBalance > totalSupply * 0.15) {
			document.getElementById('mintingHintValue').textContent = "Today you can mint USSD for WETH/WBTC";
            document.getElementById('mintingHint').style.display = 'block';
            document.getElementById('btnUSDTSelector').classList.remove('btn-selected');
            document.getElementById('btnWBTCSelector').classList.add('btn-selected');
            document.getElementById('btnWETHSelector').classList.remove('btn-selected');

            document.getElementById('btnUSDTSelector').classList.add('disabled-button');
            document.getElementById('btnWBTCSelector').classList.remove('disabled-button');
            document.getElementById('btnWETHSelector').classList.remove('disabled-button');

            targetToken = 'WBTC';
		} else {
			document.getElementById('mintingHintValue').textContent = "Minting not allowed based on the current balances";
            document.getElementById('mintingHint').style.display = 'block';
            document.getElementById('btnUSDTSelector').classList.remove('btn-selected');
            document.getElementById('btnWBTCSelector').classList.remove('btn-selected');
            document.getElementById('btnWETHSelector').classList.remove('btn-selected');

            document.getElementById('btnUSDTSelector').classList.add('disabled-button');
            document.getElementById('btnWBTCSelector').classList.add('disabled-button');
            document.getElementById('btnWETHSelector').classList.add('disabled-button');

            targetToken = null;
		}
	}
}

async function checkAllowance() {
    let allowance;
    let requiredAmount;
    const amount = Number(document.getElementById('user-mint-value').value.replace(',', '.'));
    if (targetToken === 'USDT') {
        allowance = await contractUSDT.methods.allowance(accounts[0], contractAddressUSSD).call()
        requiredAmount = Math.round(amount * Math.pow(10, 6));
    } else if (targetToken === 'WBTC') {
        allowance = await contractWBTC.methods.allowance(accounts[0], contractAddressUSSD).call()
        requiredAmount = Math.round(amount * Math.pow(10, 8));
    } else if (targetToken === 'WETH') {
        allowance = await contractWETH.methods.allowance(accounts[0], contractAddressUSSD).call()
        requiredAmount = Math.round(amount * Math.pow(10, 18));
    }

    allowance = Number(allowance);

    if (allowance >= requiredAmount) {
        console.log('Allowance is sufficient:', allowance);
        return true;
    } else {
        console.log('Allowance is insufficient. Please approve more tokens.');
        return false;
    }
}

async function handleInputChange(event) {
    const amount = Number(event.target.value.replace(',', '.'))
    await calculateUSSD(amount);
}

async function calculateUSSD(value) {
    let spendingAmount;
    if (targetToken === 'USDT') {
        spendingAmount = await contractUSSD.methods.calculateMint(contractAddressUSDT, Math.round(value * Math.pow(10, 6))).call()
    } else if (targetToken === 'WBTC') {
        spendingAmount = await contractUSSD.methods.calculateMint(contractAddressWBTC, Math.round(value * Math.pow(10, 8))).call()
    } else if (targetToken === 'WETH') {
        spendingAmount = await contractUSSD.methods.calculateMint(contractAddressWETH, Math.round(value * Math.pow(10, 18))).call()
    }

    document.getElementById('labelMintValue').textContent = '~' + (spendingAmount / Math.pow(10, 6)).toFixed(1) + ' USSD';
}

async function mint() {
    const amount = Number(document.getElementById('user-mint-value').value.replace(',', '.'));
    let amountWithDecimals = 0;
    let currentAllowance = 0;

    // Получение текущего одобренного количества токенов
    if (targetToken === 'USDT') {
        amountWithDecimals = Math.round(amount * Math.pow(10, 6));
        currentAllowance = await contractUSDT.methods.allowance(accounts[0], contractAddressUSSD).call()
    } else if (targetToken === 'WBTC') {
        amountWithDecimals = Math.round(amount * Math.pow(10, 8));
        currentAllowance = await contractWBTC.methods.allowance(accounts[0], contractAddressUSSD).call()
    } else if (targetToken === 'WETH') {
        amountWithDecimals = Math.round(amount * Math.pow(10, 18));
        currentAllowance = await contractWETH.methods.allowance(accounts[0], contractAddressUSSD).call()
    }

    if (currentAllowance < amountWithDecimals) {
        async function approve(contract) {
            contract.methods.approve(contractAddressUSSD, amountWithDecimals)
                .send({ from: accounts[0] })
                .on('transactionHash', function(hash){
                    console.log('Transaction hash:', hash);
                })
                .on('receipt', async function(receipt){
                    console.log('Transaction was approved successfully:', receipt);
                    // Здесь вы можете вызвать функцию для проверки allowance
                    if (await checkAllowance()) {
                        await runMintProcess(amountWithDecimals);
                    }
                })
                .on('error', function(error, receipt) {
                    console.error('Transaction failed:', error);
                    customAlert('Approve transaction failed')
                });

            loader();
        }

        if (targetToken === 'USDT') {
            await approve(contractUSDT);
        } else if (targetToken === 'WBTC') {
            await approve(contractWBTC);
        } else if (targetToken === 'WETH') {
            await approve(contractWETH);
        }
    } else {
        await runMintProcess(amountWithDecimals);
    }
}

async function runMintProcess(amountWithDecimals) {
    async function mint(contractAddress) {
        contractUSSD.methods.mintForToken(contractAddress, amountWithDecimals, accounts[0])
            .send({ from: accounts[0] })
            .on('transactionHash', function(hash){
                console.log('Transaction hash:', hash);
            })
            .on('receipt', async function(receipt){
                console.log('Transaction was approved successfully:', receipt);
                const event = receipt.events.Mint;
                if (event) {
                    const stableCoinAmount = event.returnValues.amountUSSD / Math.pow(10, 6);

                    console.log('Minted stableCoinAmount:', stableCoinAmount);
                    customAlert(`You have minted ${stableCoinAmount} USSD`);

                    document.getElementById('user-mint-value').value = '';
                    document.getElementById('labelMintValue').textContent = '';
                    await getWalletTokenBalances();
                }
            })
            .on('error', function(error, receipt) {
                console.error('Transaction failed:', error);
                customAlert('Transaction failed')
            });

        loader();
    }

    if (targetToken === 'USDT') {
        await mint(contractAddressUSDT);
    } else if (targetToken === 'WBTC') {
        await mint(contractAddressWBTC);
    } else if (targetToken === 'WETH') {
        await mint(contractAddressWETH);
    }
}

async function calculateAPR() {
    const aprvalue = document.getElementById("labelAPR");

    aprvalue.textContent = "APR: updating...";
    aprvalue.classList.add('updating');

    try {
        const web4 = new Web3(new Web3.providers.HttpProvider('https://arb1.arbitrum.io/rpc'));
        const contract4 = new web4.eth.Contract(contractABI, contractAddress);

        // Call the contract methods to retrieve the rate
        const rewardsInterval = await contract4.methods.rewardsInterval().call();
        const rate = rewardsInterval.rate;
        console.log("Rate: ", rate);

        // Call the contract methods to retrieve the total supply
        const totalSupply = await contract4.methods.totalSupply().call();
        console.log("Total Supply:", totalSupply);


        const SECONDS_PER_YEAR = 366 * 24 * 60 * 60;
        const UNIT_CONVERSION = 10 ** 18;

        // Step 1: Calculate rewardsPerYear
        const rewardsPerYear = ((rate / UNIT_CONVERSION) * SECONDS_PER_YEAR).toFixed(2);

        // Step 2: Calculate edTotalSupply
        const edTotalSupply = (totalSupply / UNIT_CONVERSION).toFixed(2);

        // Step 3: Calculate APR
        const aprValue = ((rewardsPerYear / edTotalSupply) * 100).toFixed(2);
        const APR = aprValue + '%';

        console.log(APR);

        aprvalue.textContent = 'APR: ' + APR;
        aprvalue.classList.remove('updating');
    } catch (error) {
        console.error("Error reading contract:", error.message);
    }
}

// Call the connect function when a button is clicked
document.getElementById("btn-connect-wallet").addEventListener("click", connect);

document.getElementById("btnUSDTSelector").addEventListener("click", selectorUSDT);
document.getElementById("btnWBTCSelector").addEventListener("click", selectorWBTC);
document.getElementById("btnWETHSelector").addEventListener("click", selectorWETH);

document.getElementById("btnMint").addEventListener("click", mint);
document.getElementById("user-mint-value").addEventListener('input', handleInputChange);

// Call toggleButtons to disable buttons initially
toggleButtons(false);
calculateAPR();
updateTargetTokenButtons();


function customAlert(message) {

 const alertMessage = document.getElementById('custom-alert-message');
 document.getElementById("custom-alert-box").style.display = "flex";
 document.getElementById("loader").style.display = "none";

  // Set message
  alertMessage.textContent = message;
  
}

function loader()
{
  document.getElementById("loader").style.display = "flex";
}