'use client';

import { useActiveSectionContexts } from '@/context/Active-sectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from '@/context/Active-sectionContext';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold, //same name can be passed without specifying,it determines how much in pecentage the section has to be in inview to be considered
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContexts();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [setActiveSection, inView, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
