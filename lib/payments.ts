type UserWallet = {
  id: string;
  balance: number;
};

type Payment = {
  from: string;
  to: string;
  amount: number;
  timestamp: Date;
};

const users: Record<string, UserWallet> = {
  user1: { id: 'user1', balance: 100 },
  user2: { id: 'user2', balance: 50 },
};

const transactions: Payment[] = [];

export function getBalance(userId: string): number {
  return users[userId]?.balance ?? 0;
}

export function makePayment(from: string, to: string, amount: number): boolean {
  if (!users[from] || !users[to]) return false;
  if (users[from].balance < amount) return false;

  users[from].balance -= amount;
  users[to].balance += amount;
  transactions.push({ from, to, amount, timestamp: new Date() });
  return true;
}

export function getTransactions(): Payment[] {
  return transactions;
}
