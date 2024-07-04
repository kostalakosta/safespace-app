'use client';
import useBaseStore from '@/shared/store/baseStore';

export default function HomePage() {
  const tg = useBaseStore((state) => state.tg);
  console.log(tg);
  return <div>Home page 2 - </div>;
}
