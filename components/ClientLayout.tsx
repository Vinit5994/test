'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Load CustomCursor only on client side
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false,
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}

