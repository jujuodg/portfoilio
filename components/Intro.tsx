'use client';

import Image from 'next/image';
import React from 'react';
import Me from '@/public/me.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/Hooks';
import { useActiveSectionContexts } from '@/context/Active-sectionContext';

export const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContexts();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' //scroll-mt to take you to the top of the links clicked
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={Me}
              alt='Obiora potrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className='text-4xl absolute bottom-0 right-0'
          >
            👋🏽
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Ugwu Obiora Paschal.</span> I'm a{' '}
        <span className='font-bold'>web and mobile developer</span> with{' '}
        <span className='font-bold'>1.5 years</span> of experience. I enjoy
        building <span className='italic'>sites & mobile apps</span>. My focus
        is <span className='underline'>React (Next.js), React Native</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/100 dark:bg-white/10 dark:text-white/90'
          href="/Obiora's Resume .pdf"
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition ' />
        </a>

        <a
          href='https://www.linkedin.com/in/obiora-ugwu-497526226/'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/100 dark:bg-white/10 dark:text-white/90'
        >
          <BsLinkedin />
        </a>

        <a
          href='https://github.com/jujistu'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/100 dark:bg-white/10 dark:text-white/90'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
