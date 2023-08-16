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
        After graduating with a degree in{' '}
        <span className='font-medium'>Mechanical Engineering</span>, I decided
        to pursue my passion for programming. I took up some certified coding
        courses and learned{' '}
        <span className='font-medium'>
          front-end development (mobile & web){' '}
        </span>
        . <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className='font-medium'>React, Next.js and React-native</span>.
        I am also familiar with TypeScript, Scss, Tailwind css, Redux and
        Firebase. I am always looking to learn new technologies. I am currently
        looking for a <span className='font-medium'>full-time position</span> as
        a software developer.
      </p>
      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, watching movies, reading non-fiction books and relaxing
        with family. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently
        learning about the{' '}
        <span className='font-medium'>State of World affairs</span>. I'm also
        learning divergent concepts that could aid my self development.
      </p>
    </motion.section>
  );
};
