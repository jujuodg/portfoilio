'use client';

import React from 'react';
import { SectionHeading } from './Section-heading';
import { projectsData } from '@/lib/data';
import Project from './Project';

import { useSectionInView } from '@/lib/Hooks';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      ref={ref}
      className='scroll-mt-28 mb-28' //adding mt when you scroll to a section
      id='projects' //id for selecting scroll
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
