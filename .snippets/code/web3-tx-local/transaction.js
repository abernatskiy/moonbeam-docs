const Web3 = require('web3');

const providerRPC = {
  development: 'http://localhost:9944',
  moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.development); // Change to correct network

const account_from = {
  privateKey: 'YOUR-PRIVATE-KEY-HERE',
  address: 'PUBLIC-ADDRESS-OF-PK-HERE',
};
const addressTo = 'ADDRESS-TO-HERE';

const send = async () => {
  console.log(`Attempting to send transaction from ${account_from.address} to ${addressTo}`);

  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      gas: 21000,
      to: addressTo,
      value: web3.utils.toWei('1', 'ether'),
    },
    account_from.privateKey
  );

  const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
  console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
};

send();