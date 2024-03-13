import React from 'react';
import type Lucide from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const fallback = <Skeleton className="size-6" />;

export type IconNames = keyof typeof Lucide.icons;

interface IconProps extends Lucide.LucideProps {
  name: string;
}

const Icon: React.FC<IconProps> = React.memo(({ name, ...props }) => {
  const LucideIcon = dynamic(async () => {
      const mod = await import('lucide-react');
      const icon = mod[name as keyof typeof mod];
      return icon ? (icon as Lucide.LucideIcon) : mod['AlertCircle'];
    }, {
      loading: () => fallback,
      ssr: false,
    },
  );

  return <LucideIcon {...props} />;
});

Icon.displayName = 'DynamicIcon ';

export default Icon;
export type { IconProps };