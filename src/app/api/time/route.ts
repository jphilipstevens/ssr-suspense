import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((res) => setTimeout(res, 5000)); // simulate delay
  return NextResponse.json({ time: new Date().toISOString() });
}
