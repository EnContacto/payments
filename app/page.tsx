import { getBalance, getTransactions } from '@/lib/payments';
import Pay from '@/components/Pay';

export default function Home() {
  const user1Balance = getBalance('user1');
  const user2Balance = getBalance('user2');
  const txs = getTransactions();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">WorldIDCoin Payment System</h1>
      <div className="mb-4">
        <p><strong>User 1 Balance:</strong> {user1Balance}</p>
        <p><strong>User 2 Balance:</strong> {user2Balance}</p>
      </div>
      <Pay />
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <ul>
          {txs.map((t, idx) => (
            <li key={idx}>
              {t.from} sent {t.amount} to {t.to} on {t.timestamp.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
