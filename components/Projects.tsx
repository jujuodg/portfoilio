import React from 'react';
import { SectionHeading } from './Section-heading';
import { projectsData } from '@/lib/data';
import Project from './Project';

export const Projects = () => {
  return (
    <section
      className='scroll-mt-28'
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
