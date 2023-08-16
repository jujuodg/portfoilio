'use client';

import React from 'react';
import { SectionHeading } from './Section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/Hooks';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true, //should be done only when page is rerendered
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:obiorapaschalugwu@gmail.com'>
          obiorapaschalugwu@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        className='mt-10 flex flex-col'
        action={(FormData) => {
          console.log(FormData);
        }}
      >
        <input
          className='h-14 rounded-lg border border-black/10 p-4 outline-black'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          required
          maxLength={500}
          placeholder='Your message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 outline-black'
        />
        <button
          className='group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
          type='submit'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
};
