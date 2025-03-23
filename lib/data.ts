import React from 'react';

import { MdOutlineEngineering } from 'react-icons/md';
import { MdOutlineComputer } from 'react-icons/md';
import { MdLocalGasStation } from 'react-icons/md';

import portfolio from '@/public/portfolio.png';
import JUrbanLux from '@/public/JUrbanLux.png';
import movieDB from '@/public/Simulator Screenshot - iPhone 15 Pro Max - 2023-09-30 at 21.08.30.png';
import Julio from '@/public/Simulator Screenshot - iPhone 15 Pro Max - 2023-09-30 at 16.45.45.png';

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
    title: 'Junior Software Engineer',
    location: 'EdgeNet Consulting Limited, Lagos',
    description:
      'Developed web applications using JavaScript and React, conducted unit testing, and collaborated on troubleshooting. Contributed to code reviews, created reusable components.',
    icon: React.createElement(MdOutlineComputer),
    date: '2021 - 2023',
  },
  {
    title: 'Software Engineer (Contract)',
    location: 'Zekyume LTD, London',
    description: `Developed AI SaaS applications, integrating machine learning models and AI services for improved functionality.`,
    icon: React.createElement(MdOutlineComputer),
    date: '2024 - 2025',
  },
  {
    title: 'Software Engineer',
    location: 'EdgeNet Consulting Limited, Lagos',
    description:
      'Developed dynamic web applications using React, Next.js, TypeScript, and JavaScript. Collaborated with designers, integrated APIs, and implemented efficient code structures, improving application performance by 20%.',
    icon: React.createElement(MdOutlineComputer),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'My PORTFOLIO SITE',
    description:
      'I developed a site for my portfolio for easy access to me by recruiters which i used with the knowledge received',
    tags: ['React', 'Next.js', 'Typescript', 'Framer motion', 'Tailwind CSS'],
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
      'Tailwind CSS',
      'Firebase Storage',
      'MongoDB',
      'Framer motion',
    ],
    imageUrl: JUrbanLux,
    http: 'https://jurbanlux.vercel.app',
  },
  {
    title: 'JuMax',
    description: `This is a mobile app built using React Native Expo and TypeScript that provides users with access to a wealth of movie information. It's designed to help users discover and explore movies, view details about them. It also includes data fetching from movieDB api`,
    tags: ['React Native', 'TypeScript', 'Tailwind CSS'],
    imageUrl: movieDB,
    http: 'https://github.com/jujistu/JuMax',
  },
  {
    title: 'Julio',
    description:
      'JUlio is a feature-rich e-commerce mobile application built using React Native. It leverages various technologies and libraries to provide a seamless shopping experience.',
    tags: [
      'React Native',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
      'Node Js',
      'Express',
      'Flutterwave api',
      'Redux toolkit',
      'MongoDB',
    ],
    imageUrl: Julio,
    http: 'https://github.com/jujistu/Julio',
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
  'MongoDB',
  'Node js',
  'Express js',
  'Team-work',
  'Time Management',
  'Adaptability',
] as const;
