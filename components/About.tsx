'use client';

import React from 'react';
import { SectionHeading } from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/Hooks';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Results-driven <span className='font-medium'>Software Engineer</span>{' '}
        with 4 years of experience in developing scalable web applications using{' '}
        <span className='font-medium'>TypeScript</span>,{' '}
        <span className='font-medium'>JavaScript</span>, and{' '}
        <span className='font-medium'>React</span>. Proficient in building
        robust front-end interfaces and collaborating with cross-functional
        teams to deliver high-performance solutions. Experienced in{' '}
        <span className='font-medium'>DevOps practices</span>, ensuring seamless
        CI/CD pipelines and infrastructure management. Skilled in{' '}
        <span className='font-medium'>Next.js</span>, API integration, and
        effective state management. Passionate about developing clean, efficient
        code and solving complex problems.
      </p>
      <p>
        I enjoy playing video games,playing football and relaxing with family. I
        also enjoy <span className='font-normal'>learning new things</span>. I
        am currently learning about the{' '}
        <span className='font-normal'>State of World affairs</span> and
        exploring divergent concepts that could aid my self-development.
      </p>
    </motion.section>
  );
};
