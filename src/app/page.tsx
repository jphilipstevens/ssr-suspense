import { Suspense } from 'react';
import TimeDisplay from './components/TimeDisplay';
import TimeSkeleton from './components/TimeSkeleton';

export default function Home() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Server Time (SSR + Suspense)</h1>
      <Suspense fallback={<TimeSkeleton />}>
        <TimeDisplay />
      </Suspense>
    </main>
  );
}
