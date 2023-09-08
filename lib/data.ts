import React from 'react';

import { MdOutlineEngineering } from 'react-icons/md';
import { MdOutlineComputer } from 'react-icons/md';
import { MdLocalGasStation } from 'react-icons/md';

import portfolio from '@/public/portfolio.png';
import JUrbanLux from '@/public/JUrbanLux.png';

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
    title: 'My PORTFOLIO SITE',
    description:
      'I developed a site for my portfolio for easy access to me by recruiters which i used with the knowledge received',
    tags: ['React', 'Next.js', 'Typescript', 'Framer motion', 'Tailwind'],
    imageUrl: portfolio,
    http: 'https://github.com/jujuodg/portfoilio',
  },
  {
    title: 'JUrbanLux',
    description:
      'This is a simple full-stack e-commerce website which was built with mongoDB and firebase which could serve as e-commerce site',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'Firebase Storage',
      'MongoDB',
      'Framer motion',
    ],
    imageUrl: JUrbanLux,
    http: 'https://github.com/jujistu/JUrbanLux',
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
