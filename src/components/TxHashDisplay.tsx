import React from 'react';

interface TxHashProps {
  hash: string;
}

/**
 * Component to display a simulated transaction hash.
 */
const TxHashDisplay: React.FC<TxHashProps> = ({ hash }) => {
  if (!hash) return null;
  return (
    <div className="text-sm mt-4">
      <p>✅ Simulated Transaction Hash:</p>
      <code className="text-green-300">{hash}</code>
    </div>
  );
};

export default TxHashDisplay;
