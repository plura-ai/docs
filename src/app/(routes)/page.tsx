"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routesConfig } from '@/config/routes.config';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${routesConfig.currentVersion}`);
  }, [router]);
  return null;
}
