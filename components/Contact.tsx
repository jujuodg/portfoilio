'use client';

import React from 'react';
import { SectionHeading } from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/Hooks';
import { sendEmail } from '@/ServerAction/SendEmail';

import { SubmitBtn } from './Submit-btn';

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
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          name='senderEmail'
          className='h-14 rounded-lg border border-black/10 p-4 outline-black'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          name='message'
          required
          maxLength={500}
          placeholder='Your message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 outline-black'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
