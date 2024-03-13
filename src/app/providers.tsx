'use client';

import { ReactNode } from 'react';
import { SettingsProvider } from '@/context/setting';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SettingsProvider>
      {children}
    </SettingsProvider>
  );
};