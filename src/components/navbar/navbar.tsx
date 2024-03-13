'use client';

import * as React from 'react';
import { useState } from 'react';

import './navbar.css';
import tabs from '@/data/menu.json';
import { useSettings } from '@/context/setting';
import MenuCarousel, { MenuItemInterface } from '@/components/navbar/menu-carousel';

export interface MenuInterface extends MenuItemInterface {
  tabs?: MenuInterface[];
}

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
  const { settings } = useSettings();

  const [activeTab, setActiveTab] = useState<number | null>(1);

  const changeActiveTab = (key: number) => {
    if (activeTab == key) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  return (
    <nav className="font-roboto navbar">
      <MenuCarousel tabs={tabs} activeTab={activeTab} changeActiveTab={changeActiveTab} />
      <MenuCarousel tabs={activeTab && tabs[activeTab] ? tabs[activeTab]?.tabs : []} variant="sm"
        className="[&_.carousel-content]:transition-all" />
    </nav>
  );
};

Navbar.displayName = 'NavigationGuest';

export default Navbar;