'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/icon';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useSettings } from '@/context/setting';

const Settings: React.FC = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <Sheet>
      <SheetTrigger className="absolute top-1/2 right-0" asChild>
        <Button size="icon" className="p-2 h-auto w-auto">
          <Icon name={'Settings'} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex items-center gap-4">
          <Switch id="navbar-icon" defaultChecked={settings.navbarIcons}
            onCheckedChange={(value) => updateSettings({ navbarIcons: value })} />
          <Label htmlFor="navbar-icon">Show navbar icons</Label>
        </div>
      </SheetContent>
    </Sheet>
  );
};

Settings.displayName = 'Settings';

export default Settings;