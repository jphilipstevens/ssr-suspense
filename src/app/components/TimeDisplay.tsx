import { fetchTime } from '@/lib/fetchTime';

export default async function TimeDisplay() {
  const time = await fetchTime();
  return <p className="text-lg font-mono">Current Time: {time}</p>;
}
