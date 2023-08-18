import React from 'react';

export const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs'>
        &copy; 2023 Ugwu Obiora. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};
