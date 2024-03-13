import * as React from 'react';
import { useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselOptions,
  CarouselPlugin,
} from '@/components/ui/carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { cn } from '@/lib/utils';
import Icon from '@/components/icon';
import { useSettings } from '@/context/setting';

export interface MenuCarouselInterface {
  tabs?: MenuItemInterface[];
  variant?: 'sm' | 'base',
  className?: string,
  activeTab?: number | null;
  changeActiveTab?: (key: number) => void;
}

export interface MenuItemInterface {
  title: string;
  icon?: string;
}

const carouselOptions: CarouselOptions = {
  align: 'center',
  containScroll: 'keepSnaps',
  dragFree: true,
  // loop: true,
};

const carouselPlugins: CarouselPlugin = [
  WheelGesturesPlugin({ forceWheelAxis: 'y' }),
];

const MenuCarousel: React.FC<MenuCarouselInterface> = ({
  tabs,
  variant = 'base',
  className = '',
  activeTab: externalActiveTab,
  changeActiveTab: externalChangeActiveTab,
}) => {
  const { settings } = useSettings();

  const [internalActiveTab, setInternalActiveTab] = useState<number | null>(null);
  const isActiveTabControlled = externalChangeActiveTab !== undefined;

  const activeTab = isActiveTabControlled ? externalActiveTab : internalActiveTab;
  const changeActiveTab = isActiveTabControlled ? externalChangeActiveTab : setInternalActiveTab;

  const [carousel, setCarousel] = useState<CarouselApi>();

  return <Carousel opts={carouselOptions} plugins={carouselPlugins} className={cn('relative', className)}
    setApi={setCarousel}>
    <CarouselContent className={cn('carousel-content', tabs?.length ? 'p-3' : '')}>
      {
        tabs?.map((tab, index) => (
          <CarouselItem key={`carousel-item-${index}`} onClick={() => changeActiveTab(index)}
            className={cn('carousel-item', activeTab == index ? 'active' : '')}>
            {
              settings.navbarIcons && tab.icon && <Icon name={tab.icon} className="size-6" strokeWidth={1.25} />
            }
            <span className={cn('text-xs sm:text-sm', variant == 'sm' ? 'sm:text-xs' : '')}>{tab.title}</span>
          </CarouselItem>
        ))
      }
    </CarouselContent>
  </Carousel>;
};

MenuCarousel.displayName = 'MenuCarousel';

export default MenuCarousel;