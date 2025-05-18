'use client';
import { useState } from 'react';

export default function Pay() {
  const [from, setFrom] = useState('user1');
  const [to, setTo] = useState('user2');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    const res = await fetch('/api/confirm-payment', {
      method: 'POST',
      body: JSON.stringify({ from, to, amount }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Send WorldIDCoin</h2>
      <div className="mb-2">
        <label>From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>
      </div>
      <div className="mb-2">
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="user2">User 2</option>
          <option value="user1">User 1</option>
        </select>
      </div>
      <div className="mb-2">
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </div>
      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
      {message && <p className="mt-2 text-green-700">{message}</p>}
    </div>
  );
}
