'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const statuses: { title: string, href: string }[] = [
  {
    title: 'New',
    href: 'new',
  }, {
    title: 'Waiting',
    href: 'waiting',
  }, {
    title: 'Planing',
    href: 'planing',
  }, {
    title: 'In progress',
    href: 'progress',
  }, {
    title: 'In testing',
    href: 'testing',
  }, {
    title: 'Completed',
    href: 'completed',
  }, {
    title: 'Cancelled',
    href: 'cancelled',
  },
];

const Navbar: React.FC = () => {
  return (
    <nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='w-32 justify-between tracking-wide focus-visible:ring-0'>
            Tasks
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='start' className='space-y-1'>
          {
            statuses.map(status => <DropdownMenuItem key={`task-link-${status.href}`} asChild>
              <Link href={`/tasks/${status.href}`} className='cursor-pointer px-4 py-2 font-medium'>
                {status.title}
              </Link>
            </DropdownMenuItem>)
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

Navbar.displayName = 'NavigationGuest';

export default Navbar;