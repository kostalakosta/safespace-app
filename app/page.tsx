'use client';
import useBaseStore from '@/shared/store/baseStore';

export default function HomePage() {
  const userId = useBaseStore((state) => state.userId);
  console.log(userId);
  return <div>Home page 2 - {userId}</div>;
}
