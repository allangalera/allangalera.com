import type { Experience } from "@/modules/resume/types";

export const experiences = [
  {
    company: "iFood",
    type: "full",
    linkedin: "https://www.linkedin.com/company/ifood-",
    jobTitles: [
      {
        title: "Senior Frontend Developer",
        location: "Sao Paulo, Brazil",
        startDate: new Date("2022-04"),
        skills: [],
      },
      {
        title: "Frontend Developer II",
        location: "Sao Paulo, Brazil",
        endDate: new Date("2022-04"),
        startDate: new Date("2020-10"),
        skills: [],
      },
    ],
  },
  {
    company: "Cognizant",
    type: "full",
    linkedin: "https://www.linkedin.com/company/cognizant/",
    jobTitles: [
      {
        title: "Frontend Developer",
        description:
          "Atuei em projeto e-commerce utilizando um cms popular de gerenciamento de e-commerce, angular 7, vuejs, sass, less.\nAtuei em projeto React Native desenvolvendo aplicativo nacional.\nAtuo em desenvolvimento web utilizando React, css in js ( emotion ), e nextjs.",
        location: "Sao Paulo, Brazil",
        startDate: new Date("2019-07"),
        endDate: new Date("2020-10"),
        skills: [],
      },
    ],
  },
  {
    company: "TUUT",
    type: "full",
    linkedin: "https://www.linkedin.com/company/tuut/",
    jobTitles: [
      {
        title: "Full-Stack Developer",
        location: "Rio de Janeiro, Brazil",
        description: "Trabalhei com um cms popular, javascript, css e html.",
        startDate: new Date("2019-02"),
        endDate: new Date("2019-07"),
        skills: [],
      },
    ],
  },
  {
    company: "Pucher Studio",
    type: "full",
    jobTitles: [
      {
        title: "Full-Stack Developer",
        location: "Rio de Janeiro, Brazil",
        startDate: new Date("2016-10"),
        endDate: new Date("2019-01"),
        description:
          "Sou desenvolvedor Full-Stack . Trabalho utilizando dois frameworks para desenvolvimento web utilizando um CMS popular e Laravel. Utilizamos o React Native para desenvolvimento mobile.",
        skills: [],
      },
    ],
  },
] satisfies Experience[];
