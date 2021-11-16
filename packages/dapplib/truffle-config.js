require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind modify include enter bottom total'; 
let testAccounts = [
"0x51e4e06897f07c91551815680270348872d8dca9cc21bfe0e8ab898be7ce0d27",
"0xdea039c1cbee5700fcd36e9f7076c5bcf93fd2d22f9dadfa51adeb88ba5c8fcb",
"0x430ae9eeb6aed4bc62fb56c854563713d1898469547057eb932f338f3ed3ede1",
"0x7a79187ecfce3fdf272d1e9b83bdca7767d6615382a550c66cc12b3e38573395",
"0xffc8ef221c9a877e3458ad880b75756d1c5b86dca0763717d21ff02e24f253a1",
"0xd527ddeb808f6593e569d8f451c9c2fe3e5d916b6f0f78cd0c8b35c6fb2db42b",
"0x69e3759da3203fcb21f74394d981926ee5ba8b3c8d84efa2b08461b5dea45943",
"0x19a047f7af2e7c26e4c5e3e83e375f42bdfa9a48085ede9c3467934da6c5331b",
"0xfd188e438a711d8764d7aeb1b1331e89c6ffe6cf67339ea509373e90d29f710e",
"0x1b6893e7b69707e7f2fde72e5a050bbcc35c7606516359c723785f8f38572ae1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

