'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Bug,
  CalendarClock,
  ClipboardList,
  FileMinus,
  FileStack,
  FolderOpenDot,
  Home,
  LayoutDashboard,
  Milestone,
  UserRound,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

const tabs = [
  {
    title: 'Home',
    icon: Home,
  }, {
    title: 'Time',
    icon: CalendarClock,
  }, {
    title: 'Tasks',
    icon: ClipboardList,
  }, {
    title: 'Milestones',
    icon: Milestone,
  }, {
    title: 'Projects',
    icon: FolderOpenDot,
  }, {
    title: 'Clients',
    icon: Users,
  }, {
    title: 'Invoices',
    icon: FileMinus,
  }, {
    title: 'People',
    icon: UserRound,
  }, {
    title: 'Dashboard',
    icon: LayoutDashboard,
  }, {
    title: 'Reports',
    icon: Bug,
  }, {
    title: 'Documents',
    icon: FileStack,
  },
];

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [api, setApi] = useState<CarouselApi>();

  const shadowLeft = useRef<HTMLDivElement>(null);
  const shadowRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    // api.reInit({
    //   dragFree: false,
    // });

    console.log(api.internalEngine().slideLooper.canLoop());
  }, [api]);

  useEffect(() => {
    api?.scrollTo(activeTab);
  }, [api, activeTab]);

  return (
    <nav className='font-roboto'>
      <Carousel opts={{
        align: 'center',
        containScroll: 'keepSnaps',
        dragFree: true,
        // loop: true,
      }} plugins={[WheelGesturesPlugin({ forceWheelAxis: 'y' })]} className='relative' setApi={setApi}>
        {/*<div ref={shadowLeft}*/}
        {/*  className='absolute top-0 left-0 h-full w-12 z-50 bg-gradient-to-r from-black/35 pointer-events-none to-transparent'></div>*/}

        <CarouselContent className='m-0 gap-4 p-4'>
          {
            tabs.map((tab, index) => (
              <CarouselItem key={`carousel-item-${index}`} onClick={() => setActiveTab(index)}
                className={cn('flex flex-col gap-2 cursor-pointer items-center basis-20 sm:basis-24 h-auto p-2 rounded border shadow-md hover:shadow-lg hover:shadow-purple-400 last-of-type:mr-4 transition-shadow', activeTab == index ? 'border-gray-600 shadow-purple-400' : '')}>
                <tab.icon className='size-4 sm:size-6' />
                <span className='text-xs sm:text-sm'>{tab.title}</span>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        {/*<div ref={shadowRight}*/}
        {/*  className='absolute top-0 right-0 h-full w-12 z-50 bg-gradient-to-l from-black/35 pointer-events-none to-transparent'></div>*/}
        <CarouselPrevious />
        <CarouselNext />

      </Carousel>
    </nav>
  );
};

Navbar.displayName = 'NavigationGuest';

export default Navbar;