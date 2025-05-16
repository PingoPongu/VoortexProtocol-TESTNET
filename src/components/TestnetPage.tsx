import React, { useState } from 'react';
import generateTxHash from '../utils/generateTxHash';
import TxHashDisplay from './TxHashDisplay';

/**
 * TestnetPage component for Voortex Protocol mock testnet.
 */
const TestnetPage: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [txCount, setTxCount] = useState(0);

  const connectWallet = () => setWalletConnected(true);
  const simulateBridge = () => {
    const hash = generateTxHash();
    setTxHash(hash);
    setTxCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-4xl font-bold">Voortex Protocol Testnet</h1>
      <p className="text-lg">AI-native Layer 2 for Solana — Simulation Mode</p>
      {!walletConnected ? (
        <button onClick={connectWallet} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl shadow">
          Connect Phantom Wallet
        </button>
      ) : (
        <>
          <p className="text-green-400">Wallet connected ✅</p>
          <button onClick={simulateBridge} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-2xl shadow">
            Simulate Bridge to Voortex
          </button>
          <TxHashDisplay hash={txHash} />
          <p className="mt-4">Total simulated txs: {txCount}</p>
        </>
      )}
      <footer className="mt-12 text-xs text-gray-400">Testnet Mock — Not connected to real blockchain</footer>
    </div>
);

export default TestnetPage;
