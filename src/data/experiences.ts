import type { Experience } from '@/modules/resume/types';

export const experiences = [
  {
    company: 'Trade Republic',
    type: 'full',
    linkedin: 'https://www.linkedin.com/company/trade-republic',
    jobTitles: [
      {
        title: 'Frontend Engineer',
        location: 'Berlin, Germany',
        startDate: '2023-06-01',
        tags: ['Vuejs', 'Contentful', 'Nuxt'],
      },
    ],
  },
  {
    company: 'iFood',
    type: 'full',
    linkedin: 'https://www.linkedin.com/company/ifood-',
    jobTitles: [
      {
        title: 'Senior Frontend Developer',
        description:
          'With the new role I started mentoring my less experienced co-workers and also being recognized as a tech reference to the others around, providing solutions and giving life to ideas.',
        location: 'Sao Paulo, Brazil',
        startDate: '2022-04',
        endDate: '2023-04-28',
        tags: ['Reactjs', 'Cypress', 'Directus', 'Strapi', 'Agile'],
      },
      {
        title: 'Frontend Developer II',
        description: 'Worked on the help center of a food delivery web app.',
        location: 'Sao Paulo, Brazil',
        endDate: '2022-04',
        startDate: '2020-10',
        tags: ['Reactjs', 'Cypress', 'Strapi', 'Agile'],
      },
    ],
  },
  {
    company: 'Cognizant',
    type: 'full',
    linkedin: 'https://www.linkedin.com/company/cognizant/',
    jobTitles: [
      {
        title: 'Frontend Developer',
        description:
          'I worked with two clients: one that was an e-comerce and other that I architected a website and developed an app.',
        location: 'Sao Paulo, Brazil',
        startDate: '2019-07',
        endDate: '2020-10',
        tags: ['Angular', 'Vuejs', 'Nextjs', 'Reactjs', 'React Native'],
      },
    ],
  },
  {
    company: 'TUUT',
    type: 'full',
    linkedin: 'https://www.linkedin.com/company/tuut/',
    jobTitles: [
      {
        title: 'Full-Stack Developer',
        location: 'Rio de Janeiro, Brazil',
        description:
          'My job at TUUT was to create high fidelity design websites.',
        startDate: '2019-02',
        endDate: '2019-07',
        tags: ['Wordpress'],
      },
    ],
  },
  {
    company: 'Pucher Studio',
    type: 'full',
    jobTitles: [
      {
        title: 'Full-Stack Developer',
        location: 'Rio de Janeiro, Brazil',
        startDate: '2016-10',
        endDate: '2019-01',
        description:
          'Most of my job was to build high fidelity design websites. But I also had a project that I had to create a whole ecosystem to make a inventory management system for a small market. For that we had to develop a desktop app, a web app and a mobile app.',
        tags: ['Wordpress', 'React Native', 'Electron', 'Laravel'],
      },
    ],
  },
] satisfies Experience[];
