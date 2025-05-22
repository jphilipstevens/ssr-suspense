export async function fetchTime(): Promise<string> {
  const res = await fetch(`${process.env.BASE_URL || ''}/api/time`, {
    cache: 'no-store',
  });

  const data = await res.json();
  return data.time;
}
