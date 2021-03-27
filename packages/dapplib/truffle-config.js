require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note prefer proud install merry flock gas'; 
let testAccounts = [
"0xd8ecaf3a0c08a127ed82116b7e32217bdcf441a3acde6f3291e4024cde874f5c",
"0x1127f9ef23069133b6cbc3230d8d70ed0fcc58f04a347dd562067a754c597e92",
"0x9e00539b96b6dd47d11720598e24d6c93d46d815a4ee96269c55233f9fa1cc7f",
"0x007b1fa170c1f5c6ef56259c69856eb542625f29023801bbdf4a0a58aa5678d6",
"0x3db452c4e833059874e3526475987e7aea975ad23da8df967168006522c28434",
"0x9e9d948d7266bba461a32e0272b795e0fdae41b32c6b2db40c79b79c44fd52e6",
"0x2bcda2d3d27b61bf31f9b0bd5d41725ff5b491ea093f95ab911128111c1d708d",
"0x6f94a78c1e3b99f14fcb9c898f0d8835b5a54720aacacde769b93d8b318eeabd",
"0x01e182c7f8a9a78cbb882458fe274ce79f20959f0b0e2ca4efd8cdb923c6f63b",
"0xbc08671ee14311170d909998c88969337a884908180d586b5b3486cb49d63086"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
