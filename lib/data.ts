import React from 'react';

import { MdOutlineEngineering } from 'react-icons/md';
import { MdOutlineComputer } from 'react-icons/md';
import { MdLocalGasStation } from 'react-icons/md';

import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Engineering Intern',
    location: 'Naval Dockyard Limited VI, Lagos',
    description:
      'I learnt basic Engineering Principles,Welding and Fabrication,Team work and Safety Protocols',
    icon: React.createElement(MdOutlineEngineering),
    date: '2021',
  },
  {
    title: 'Maintenance Intern',
    location: 'Pinnacle Oil and Gas ltd VI, Lagos',
    description:
      'I learnt how to perform vehicle maintenance, Preventive maintenance,Documentation,Inventory Management and Time management',
    icon: React.createElement(MdLocalGasStation),
    date: '2022',
  },
  {
    title: 'Front-end Developer',
    location: 'Lagos',
    description: `i'm a freelance front-end developer who builds mobile and web application using react native and next.js continuously improving my stack`,
    icon: React.createElement(MdOutlineComputer),
    date: '2022 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
    http: 'github.com',
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
    http: 'github.com',
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    http: 'github.com',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Git',
  'Tailwind',
  'Scss',
  'Redux',
  'Framer Motion',
] as const;
