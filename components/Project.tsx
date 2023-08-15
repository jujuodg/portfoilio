'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, imageUrl, tags }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'], //start and stop of animation,check docs
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //transforming for scaling check docs
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); //transforming for scaling check docs

  return (
    <motion.div //added div for smoother transition
      className='group mb-3 sm:mb-8 last:mb-0'
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }} //to add animation while scrolling through the projects check docs
    >
      <section className='group-even:pl-8 rounded-lg bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]   hover:bg-gray-200 transition'>
        <div className='py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt='Project i worked on'
          quality={95}
          className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:-translate-x-3 group-even:-translate-y-3 group-even:rotate-2'
        />
      </section>
    </motion.div>
  );
};

export default Project;
