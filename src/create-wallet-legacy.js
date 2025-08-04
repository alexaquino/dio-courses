// Dependencies imports
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Network configuration
const NETWORK = bitcoin.networks.testnet;

// Wallet derivation path (Hierarchical Deterministic) - BIP44 for Legacy P2PKH
const PATH = `m/44'/1'/0'/0`;

// Generate a mnemonic to seed the wallet
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Generate a root wallet 
let root = bip32.fromSeed(seed, NETWORK);

// Generate a account wallet (pvt-pub keys)
let account = root.derivePath(PATH);
let node = account.derive(0).derive(0);

// Generate P2PKH address (Legacy - most widely supported by faucets)
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: NETWORK,
}).address;

console.log("Wallet Generated Successfully (Legacy P2PKH)");
console.log("Address: ", btcAddress);
console.log("Private Key: ", node.toWIF());
console.log("Seed: ", mnemonic);

console.log("https://mempool.space/testnet4/address/" + btcAddress);
console.log("https://mempool.space/testnet4/faucet");
console.log("https://electrum.org/#download");


// Wallet Generated Successfully (Legacy P2PKH)
// Address:  mpyETSQP2b9gdEqHznjBxA2yfijqsBbzDr
// Private Key:  cR9uLj2tJLLm35aTxX51RbukF7swDnD95pJb8eCKuogNF4cpzqNY
// Seed:  group mean anger sick disagree prevent describe human test between memory object
// https://mempool.space/testnet4/address/mpyETSQP2b9gdEqHznjBxA2yfijqsBbzDr