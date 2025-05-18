import { NextResponse } from 'next/server';
import { makePayment } from '@/lib/payments';

export async function POST(req: Request) {
  const { from, to, amount } = await req.json();

  const success = makePayment(from, to, amount);
  if (!success) {
    return NextResponse.json({ message: 'Payment failed' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Payment successful' });
}