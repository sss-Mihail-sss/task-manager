'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface SettingInterface {
  navbarIcons: boolean;
}

type SettingsContextState = {
  settings: SettingInterface;
  updateSettings: (updatedSettings: Partial<SettingInterface>) => void;
}

const SettingsContext = createContext<SettingsContextState>(null!);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingInterface>(() => {
    if (localStorage != undefined) {
      const localStorageSettings = localStorage?.getItem('settings');
      return localStorageSettings ? JSON.parse(localStorageSettings) : { navbarIcons: true };
    }
  });

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (updatedSettings: Partial<SettingInterface>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...updatedSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};