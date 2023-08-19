'use client';

import React, { useState } from 'react';
import { SectionHeading } from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/Hooks';
import { sendEmail } from '@/ServerAction/SendEmail';

import { SubmitBtn } from './Submit-btn';
import { toast } from 'react-hot-toast';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputMessageValue, setInputMessageValue] = useState('');

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
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:obiorapaschalugwu@gmail.com'>
          obiorapaschalugwu@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error); //put the main jsx in layout
            return; //stop the function
          }
          setInputEmailValue('');
          setInputMessageValue('');
          toast.success('Email sent successfully!');
        }}
      >
        <input
          name='senderEmail'
          className='h-14 rounded-lg border border-black/10 p-4 outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          type='email'
          value={inputEmailValue}
          onChange={(e) => setInputEmailValue(e.target.value)}
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          name='message'
          required
          value={inputMessageValue}
          onChange={(e) => setInputMessageValue(e.target.value)}
          maxLength={500}
          placeholder='Your message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
