// data/new-projects.ts

import type { NewProject } from '../types/types';

export const projects: NewProject[] = [
  {
    id: 1,
    imageSrc: '/src/assets/images-account/new-projects1.png',
    tagText: 'Climate action',
    tagClass: 'bg-green',
    title: 'Pathways Out',
    description: 'Keep your messages short, but make sure they cover everything you need to say.'
  },
  {
    id: 2,
    imageSrc: '/src/assets/images-account/new-projects2.png',
    tagText: 'Reduce Inequality',
    tagClass: 'bg-pink',
    title: 'BrightMind Alliance',
    description: 'Keep your messages short, but make sure they cover everything you need to say.'
  },
  {
    id: 3,
    imageSrc: '/src/assets/images-account/new-projects3.png',
    tagText: 'Climate action',
    tagClass: 'bg-green',
    title: 'EarthPulse Movement',
    description: 'Keep your messages short, but make sure they cover everything you need to say.'
  }
];