/**
 * Generates an 8-character random transaction hash.
 */
export default function generateTxHash(): string {
  return Math.random().toString(36).substring(2, 10);
}
