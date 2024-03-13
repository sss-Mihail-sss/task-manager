'use client';

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/icon';
import { useSettings } from '@/context/setting';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Settings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <Sheet>
      <SheetTrigger className="absolute bottom-2 right-2" asChild>
        <Button size="icon" className="p-2 h-auto w-auto">
          <Icon name={'Settings'} />
        </Button>
      </SheetTrigger>

      <SheetContent className="py-12">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">Navbar Setting</AccordionTrigger>
            <AccordionContent className="flex items-center justify-between gap-4 pb-4 pt-0 transition-all h-auto">
              <Label htmlFor="navbar-icon" className="cursor-pointer">Show navbar icons</Label>
              <Switch id="navbar-icon" defaultChecked={settings.navbarIcons}
                onCheckedChange={(value) => updateSettings({ navbarIcons: value })} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

Settings.displayName = 'Settings';

export default Settings;