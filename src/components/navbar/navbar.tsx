'use client';

import * as React from 'react';
import { useState } from 'react';

import './navbar.css';
import tabs from '@/data/menu.json';
import MenuCarousel from '@/components/navbar/menu-carousel';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<number | null>(tabs.findIndex(tab => tab.href == pathname));

  const changeActiveTab = (key: number) => {
    if (activeTab == key) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  return (
    <nav className="font-roboto navbar">
      <MenuCarousel tabs={tabs} activeTab={activeTab} changeActiveTab={changeActiveTab} className="border-b-2" />
      <MenuCarousel tabs={activeTab && tabs[activeTab] ? tabs[activeTab]?.tabs : []} variant="sm"
        className="border-b-2 h-min transition-all" />
    </nav>
  );
};

Navbar.displayName = 'NavigationGuest';

export default Navbar;