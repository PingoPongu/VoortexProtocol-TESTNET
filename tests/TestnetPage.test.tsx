import { render, screen, fireEvent } from '@testing-library/react';
import TestnetPage from '../src/components/TestnetPage';

describe('TestnetPage', () => {
  test('increments tx count on simulate', () => {
    render(<TestnetPage />);
    const walletButton = screen.getByText(/Connect Phantom Wallet/i);
    fireEvent.click(walletButton);
    const simulateButton = screen.getByText(/Simulate Bridge to Voortex/i);
    fireEvent.click(simulateButton);
    expect(screen.getByText(/Total simulated txs: 1/i)).toBeInTheDocument();
  });
});
