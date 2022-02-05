
// Check Metamask installed?
console.log(window.ethereum.isMetaMask) //true

// Check currentChanId. ChainId of BSC Testnet is 0x61
console.log(window.ethereum.chainId) //0x61

// Transfer
const account = await ethereum.request({ method: 'eth_accounts' });
const recipient = "0xd46e8dd67c5d32be8058bb8eb970870f07244567";
const params= [
    {
      from: account[0],
      to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
      value: '0x0',
      data: "000000000000000000000000" + recipient.slice(2, recipient.length)
    },
  ];
  
  await ethereum.request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      // If the request fails, the Promise will reject with an error.
    });

