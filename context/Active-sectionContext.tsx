'use client';

import React, { createContext, useContext, useState } from 'react';
import { links } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); //keeping track to disable the observer temporary when a link is click
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        setTimeOfLastClick,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContexts = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
};
