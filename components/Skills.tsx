'use client';

import React from 'react';
import { SectionHeading } from './Section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/Hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};
const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index} //to get a delay from transition when displaying the list
            className='bg-white border border-black/[0.1] rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/90'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
